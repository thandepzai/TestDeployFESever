import OrderItem from './orderItem'
import { useParams, useRouter } from 'next/navigation'
import { getData } from './SSRData'
import { SetStateAction } from 'react'

interface Props {
	order: any
	SetShowOtp: (value: SetStateAction<boolean>) => void
}

const DetailOrderComponent: React.FC<Props> = ({ order, SetShowOtp }) => {
	const router = useRouter()

	const renderPrice = (price: number) => {
		return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'code' })
	}

	const listStatus = {
		WAITING: ' Chờ xác nhận',
		CONFIRM: ' Đã xác nhận',
		SHIPPING: ' Đang giao hàng',
		CANCELED: ' Đã hủy',
		DONE: ' Thành công',
		REFUND: ' Chờ hoàn tiền'
	}

	return (
		<div className="bg-white py-8">
			{order === undefined ? (
				<div role="status" className="max-w-lg animate-pulse p-5">
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
					<span className="sr-only">Loading...</span>
				</div>
			) : (
				<>
					<div className="container mx-auto px-4">
						<h1 className="text-2xl font-semibold mb-4 text-center">Đơn hàng: {order.order.code}</h1>
						<div className="block md:flex w-full">
							<div className="w-full md:w-1/2 md:mr-2 mb-4 p-4 bg-gray-100 rounded-md">
								<p className="w-full text-center font-semibold">Thông tin khách hàng</p>
								<p>Họ và tên: {order.customer.name}</p>
								<p>Số điện thoại: {order.customer.phone}</p>
								<p>Email: {order.customer.email}</p>
								<p>Địa chỉ: {order.customer.address}</p>
							</div>
							<div className="w-full md:w-1/2 md:ml-2 mb-4 p-4 bg-gray-100 rounded-md">
								<p className="w-full text-center font-semibold">Thông tin đơn hàng</p>
								<p>Tổng tiền: {renderPrice(order.payment.amount)}</p>
								<p>Tổng số lượng: {order.payment.quantity}</p>
								<p>
									Trạng thái:
									{
										listStatus[
											order.order.status as
												| 'WAITING'
												| 'CONFIRM'
												| 'SHIPPING'
												| 'CANCELED'
												| 'DONE'
												| 'REFUND'
										]
									}
								</p>
								<p>Công ty vận chuyển: {order.shipping?.name}</p>
								<p>Mã vận chuyển: {order.shipping?.code}</p>
							</div>
						</div>
						<h1 className="text-2xl font-semibold mb-4 text-center">Danh sách sản phẩm</h1>
						<div className=" md:grid flex-col md:flex-row justify-start gap-4 grid-cols-2">
							<OrderItem listProduct={order.listProduct} />
						</div>
					</div>
					<div className="flex justify-evenly my-2">
						<button
							onClick={() => {
								router.push('/don-hang')
							}}
							className="py-3 bg-stone-300 text-black rounded-xl px-5 text-base font-semibold hover:opacity-80"
						>
							Quay Lại
						</button>
						{order.order.status === 'WAITING' && (
							<button
								onClick={() => SetShowOtp(true)}
								className="py-3 bg-rose-600 text-black rounded-xl px-5 text-base font-semibold hover:opacity-80"
							>
								Hủy đơn
							</button>
						)}
					</div>
				</>
			)}
		</div>
	)
}
export default DetailOrderComponent
