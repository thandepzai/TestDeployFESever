'use client'
import { SubmitHandler } from 'react-hook-form'
import ImportInfo from './importInfo'
import CheckOtp from './checkOtp'
import { useState } from 'react'
import { useCartContext } from '@/src/contexts/CartContext'

interface Inputs {
	name: string
	email: string
	phone: number
	address: string
	paymentMethod: string
}

const PaymentOrder: React.FC = () => {
	const [dataSend, setDadaSend] = useState<Inputs>()
	const [changeStatus, setChangeStatus] = useState(true)
	const { cart } = useCartContext()

	const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
		setDadaSend(data)
		setChangeStatus(false)
	}
	return (
		<div className="py-10 px-5 bg-stone-200 border border-solid max-w-7xl my-2 mx-auto">
			{changeStatus ? (
				<ImportInfo onSubmit={onSubmit} dataSend={dataSend} />
			) : (
				<CheckOtp dataSend={dataSend} setChangeStatus={setChangeStatus} cart={cart} />
			)}
		</div>
	)
}

export default PaymentOrder
