'use client'
import { useEffect } from 'react'
import 'react-phone-input-2/lib/style.css'
import { Toaster } from 'react-hot-toast'
import { SuccessIcon } from '@/src/@Core/components/paymentIcon'
import { createData } from '../SSRData'
import { useCartContext } from '@/src/contexts/CartContext'
import { useStorage } from '@/src/hooks'
import { STORAGE } from '@/src/const/app-const'
import { paymentReturn } from './PaymentReturn'

const OnlinePaymentView: React.FC = () => {
	const { createOrder } = createData()
	const { cart } = useCartContext()
	const [dataSend] = useStorage(STORAGE.LOCAL, 'user', {})
	const { check, code } = paymentReturn()

	// Data for CAll APi
	useEffect(() => {
		if (Object.keys(dataSend).length !== 0 && check) {
			const { name, phone, email, address, paymentMethod } = dataSend
			let sumPrice = 0,
				sumQuantity = 0
			const items = cart.map((item: any) => {
				sumPrice += item.quantity * item.sizeProduct.price
				sumQuantity += item.quantity
				return {
					sizeProductId: item.id,
					quantity: item.quantity
				}
			})
			const customerInfo = {
				name,
				phone,
				email,
				address
			}
			const paymentInfo = {
				status: 'Da thanh toan',
				amount: sumPrice,
				quantity: sumQuantity,
				method: paymentMethod,
				note: `O${code}`
			}
			createOrder({ items, customerInfo, paymentInfo })
		}
	}, [])

	return (
		<section className="flex items-center justify-center md:py-52">
			<div>
				<Toaster toastOptions={{ duration: 4000 }} />
				<div>
					<div className="flex items-center">
						<SuccessIcon />
						<h2 className="text-center text-black font-medium text-2xl">
							Thanh toán thành công đơn hàng của bạn đang được đặt
						</h2>
					</div>
					<div className="flex items-center w-full justify-center">
						<h2 className="text-center text-black font-medium text-2xl mr-2">Vui lòng chờ</h2>
						<div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s] mr-1" />
						<div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s] mr-1" />
						<div className="h-2 w-2 bg-black rounded-full animate-bounce" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default OnlinePaymentView
