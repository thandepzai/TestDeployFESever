import Link from 'next/link'

interface Props {
	cart: any
	renderPrice: (price: number) => string
	quantityProduct: number
}
const PayItem: React.FC<Props> = ({ cart, renderPrice, quantityProduct }) => {
	let sumQuantity = 0,
		sumPrice = 0
	cart.forEach((item: any) => {
		sumQuantity += item.quantity
		sumPrice += item.quantity * item.sizeProduct.price
	})
	return (
		<div className="mt-6 h-full rounded-lg border bg-white p-5 shadow-md md:mt-0 md:w-1/3">
			<div className="mb-2 flex justify-between">
				<p className="text-gray-700">Tổng số sản phẩm:</p>
				<p className="text-gray-700">{quantityProduct}</p>
			</div>
			<div className="flex justify-between">
				<p className="text-gray-700">Tổng số lượng</p>
				<p className="text-gray-700">{sumQuantity}</p>
			</div>
			<hr className="my-4" />
			<div className="flex justify-between mb-6">
				<p className="text-lg font-bold">Tổng tiền</p>
				<div>
					<p className="mb-1 text-lg font-bold">{renderPrice(sumPrice)}</p>
				</div>
			</div>
			<div className="w-full flex justify-center">
				<Link
					className="px-4 rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
					href={'/thanh-toan'}
				>
					Thanh toán
				</Link>
			</div>
		</div>
	)
}

export default PayItem
