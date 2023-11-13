import React from 'react'
import Link from 'next/link'
import { FaShippingFast } from 'react-icons/fa'

const OrderIcon: React.FC = () => {
	return (
		<div>
			<Link
				href="/don-hang"
				className="relative flex items-center pr-1 md:pl-6 md:pr-6 md:border-r-slate-300 md:border-l-2 md:border-l-slate-300 z-50"
			>
				<FaShippingFast style={{ fontSize: '1.6rem' }} />
			</Link>
		</div>
	)
}

export default OrderIcon
