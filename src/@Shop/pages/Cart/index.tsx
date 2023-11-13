'use client'
import { useCartContext } from '@/src/contexts/CartContext'
import CartItem from './cartItem'
import PayItem from './payItem'
import NoSsr from '@/src/@Core/components/noSsr'

const Cart = () => {
	const { cart, quantityProduct } = useCartContext()
	const renderPrice = (price: number) => {
		return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'code' })
	}

	return (
		<div className="py-10 bg-stone-50 border border-solid">
			<h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
			<NoSsr>
				<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
					<div className="rounded-lg md:w-2/3">
						{cart.map((item: any, key: number) => {
							return <CartItem cart={item} renderPrice={renderPrice} key={key} />
						})}
					</div>
					<PayItem cart={cart} renderPrice={renderPrice} quantityProduct={quantityProduct} />
				</div>
			</NoSsr>
		</div>
	)
}
export default Cart
