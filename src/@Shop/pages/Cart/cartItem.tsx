import { useCartContext } from '@/src/contexts/CartContext'
import { useState } from 'react'
import { HiMinusSm, HiOutlinePlusSm } from 'react-icons/hi'

interface Props {
	cart: any
	renderPrice: (price: number) => string
}
const CartItem: React.FC<Props> = ({ cart, renderPrice }) => {
	const listImages = JSON.parse(cart.product.images) as string[]
	const [counter, setCounter] = useState(cart.quantity)
	const { changeCart, deleteCart } = useCartContext()

	const increment = () => {
		if (counter < cart.sizeProduct.quantity) {
			const newQuantity = counter + 1
			setCounter((prev: number) => prev + 1)
			changeCart(cart.id, newQuantity)
		}
	}
	const decrement = () => {
		if (counter > 1) {
			const newQuantity = counter - 1
			setCounter((prev: number) => prev - 1)
			changeCart(cart.id, newQuantity)
		}
	}

	const onInputNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= cart.sizeProduct.quantity) {
			const newQuantity = +e.currentTarget.value
			setCounter(+e.currentTarget.value)
			changeCart(cart.id, newQuantity)
		}
	}

	const handleDelete = () => {
		deleteCart(cart.id)
	}

	return (
		<div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
			<img src={listImages[0]} alt="product-image" className="w-full rounded-lg sm:w-40" />
			<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
				<div className="mt-5 sm:mt-0">
					<h2 className="text-lg font-bold text-gray-900">{cart.product.name}</h2>
					<p className="mt-1 text-xs text-gray-700">Size: {cart.sizeProduct.size}</p>
					<p className="mt-1 text-xs text-gray-700">Giá: {renderPrice(cart.sizeProduct.price)}</p>
				</div>
				<div className="flex">
					<div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
						<div className="flex items-center justify-end mt-4 cursor-pointer">
							<div className="p-2" onClick={increment}>
								<HiOutlinePlusSm style={{ fontSize: '1.5rem' }} />
							</div>
							<input
								className="inline-block w-14 py-2 px-1 mx-1 border-[1px] border-gray-400"
								type="number"
								min={1}
								max={cart.sizeProduct.quantity}
								value={counter}
								onChange={onInputNumberChangeHandler}
							/>
							<div onClick={decrement} className="p-2">
								<HiMinusSm style={{ fontSize: '1.5rem' }} />
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<p className="text-sm">{renderPrice(cart.sizeProduct.price * counter)}</p>
						</div>
					</div>
					<div className="flex items-center m-4 pt-3.5 sm:block sm:m-0 sm:p-0">
						<button onClick={handleDelete}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
