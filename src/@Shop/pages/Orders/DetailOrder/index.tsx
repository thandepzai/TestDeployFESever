'use client'

import { useState } from 'react'
import DetailOrderComponent from './detailOrderComponent'
import CheckOtp from './checkOtp'
import { useParams } from 'next/navigation'
import { getData } from './SSRData'
const DetailOrder: React.FC = () => {
	const [showOTP, SetShowOtp] = useState(false)
	const params = useParams()
	const code = params.code as string

	const { order } = getData(code)
	console.log('🚀 ~ file: index.tsx:13 ~ order:', order)

	return (
		<>
			{showOTP ? (
				<CheckOtp setChangeStatus={SetShowOtp} id={order.order.id} phone={order.customer.phone} />
			) : (
				<DetailOrderComponent order={order} SetShowOtp={SetShowOtp} />
			)}
		</>
	)
}
export default DetailOrder
