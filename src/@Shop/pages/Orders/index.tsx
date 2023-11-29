'use client'
import Link from 'next/link'
import { getOrder } from './SSRData'
import { useCallback, useEffect, useState } from 'react'
import { useStorage } from '@/src/hooks'
import { STORAGE } from '@/src/const/app-const'
import NoSsr from '@/src/@Core/components/noSsr'

const Orders: React.FC = () => {
	const { data, getListOrder } = getOrder()
	console.log('🚀 ~ file: index.tsx:8 ~ data:', data)
	const [value, setValue] = useState('')

	const [order] = useStorage(STORAGE.LOCAL, 'order', [])
	const [listOrder, setListOrder] = useState([...order])

	const renderPrice = (price: number) => {
		return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'code' })
	}

	const handleFindOrder = () => {
		getListOrder({ params: { value } })
	}

	const RenderListOrders = useCallback(() => {
		const valueRender = !(data === undefined) ? data : listOrder

		return (
			<NoSsr>
				{valueRender.map((item: any, key: number) => {
					return (
						<tr className="border-y" key={key}>
							<td className="py-4">{item.code}</td>
							<td className="py-4 hidden md:block">{item.orderCustomerInfo.phone}</td>
							<td className="py-4">{renderPrice(item.orderPayment.amount)}</td>
							<td className="py-4 hidden md:block">{item.orderPayment.quantity}</td>
							<td className="py-4">
								<Link href={`don-hang/${item.code}`} className="hover:text-blue-500">
									Xem chi tiết
								</Link>
							</td>
						</tr>
					)
				})}
			</NoSsr>
		)
	}, [data])
	return (
		<div className="bg-white h-screen py-8">
			<div className="container mx-auto px-4">
				<h1 className="text-xl font-semibold px-4">
					Nhập mã đơn hàng hoặc số điện thoại để tìm kiếm đơn hàng:
				</h1>
				<div className="w-full block px-4 mb-2">
					<input
						className="px-4 py-2 md:py-3 bg-transparent outline-none w-full md:w-2/3 lg:w-10/12 my-3 border-2 rounded-xl"
						type="search"
						onChange={e => setValue(e.target.value)}
						placeholder="Nhập để tìm kiếm"
						onKeyDown={e => {
							if (e.key === 'Enter') {
								handleFindOrder()
							}
						}}
					/>
					<button
						onClick={handleFindOrder}
						className="bg-teal-500 rounded-lg px-5 py-3 my-auto w-full md:ml-8 md:w-auto "
					>
						Tìm kiếm
					</button>
				</div>
				<h1 className="text-2xl font-semibold mb-4 text-center">Danh sách đơn hàng</h1>

				<div className="flex flex-col md:flex-row gap-4">
					<div className="md:w-full">
						<div className="bg-gray-100 rounded-sm shadow-md p-6 mb-4">
							<table className="w-full table-fixed">
								<thead>
									<tr>
										<th className="text-left font-semibold">Mã đơn hàng</th>
										<th className="text-left font-semibold hidden md:block">Số điện thoại</th>
										<th className="text-left font-semibold">Tổng số tiền</th>
										<th className="text-left font-semibold hidden md:block">Tổng số lượng</th>
										<th className="text-left font-semibold">Hành động</th>
									</tr>
								</thead>
								<tbody>
									<RenderListOrders />
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Orders
