import Link from 'next/link'

interface Params {
	listProduct: []
}
const OrderItem: React.FC<Params> = ({ listProduct }) => {
	return (
		<>
			{listProduct.map((item: any, key: number) => {
				const listImages = JSON.parse(item.SizeProduct.Product.images) as string[]

				return (
					<div className="w-full" key={key}>
						<Link
							href={`/san-pham/${item.SizeProduct.Product.id}`}
							className="justify-between mb-6 rounded-lg bg-white p-6 md:p-2 lg:p-6 shadow-md sm:flex sm:justify-start hover:opacity-90"
						>
							<img src={listImages[0]} alt="product-image" className="w-full rounded-lg sm:w-40" />
							<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
								<div className="mt-5 sm:mt-0">
									<h2 className="text-lg font-semibold text-gray-800">
										{item.SizeProduct.Product.name}
									</h2>
									<p className="mt-1 text-sm text-gray-700">Size: {item.SizeProduct.size}</p>
									<p className="mt-1 text-sm text-gray-700">Đơn giá: {item.SizeProduct.price}</p>
									<p className="mt-1 text-sm text-gray-700">Số lượng: {item.quantity}</p>
								</div>
							</div>
						</Link>
					</div>
				)
			})}
		</>
	)
}
export default OrderItem
