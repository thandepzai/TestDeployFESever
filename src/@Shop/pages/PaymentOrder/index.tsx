'use client'
import { SubmitHandler } from 'react-hook-form'
import ImportInfo from './importInfo'
import CheckOtp from './checkOtp'
import { useEffect, useState } from 'react'
import { useCartContext } from '@/src/contexts/CartContext'
import { processingPayment } from './OnlinePayment'

interface Inputs {
	name: string
	email: string
	phone: number
	address: string
	paymentMethod: string
}

const PaymentOrder: React.FC = () => {
	const [dataSend, setDadaSend] = useState<Inputs>()
	const [paymentMethod, setPaymentMethod] = useState('')
	const { cart } = useCartContext()
	const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
		setDadaSend(data)
		setPaymentMethod(data?.paymentMethod)
	}
	useEffect(() => {
		if (paymentMethod === 'online') {
			processingPayment(dataSend, cart)
		}
	}, [paymentMethod])
	return (
		<div className="py-10 px-5 bg-stone-200 border border-solid max-w-7xl my-2 mx-auto">
			{paymentMethod === 'receive' ? (
				<CheckOtp dataSend={dataSend} setPaymentMethod={setPaymentMethod} cart={cart} />
			) : (
				<ImportInfo onSubmit={onSubmit} dataSend={dataSend} />
			)}
		</div>
	)
}

export default PaymentOrder
