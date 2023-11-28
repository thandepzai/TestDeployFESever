'use client'
import { Carousel, Benefits, Offers } from '@/src/@Core/components'
import Brands from '@/src/@Core/components/brands'
import Newest from '@/src/@Core/components/newest/Newest'
import CoreSpinner from '@/src/@Core/components/spinner/CoreSpinner'
import React from 'react'
import { getData } from './SSRData'

const Home = () => {
	const { products, handleUpdatePageSize } = getData()

	return (
		<div>
			<Carousel />
			<Benefits />
			<Offers />
			{products === undefined ? (
				<div className="w-full flex justify-center">
					<CoreSpinner />
				</div>
			) : (
				<Newest products={products} handleUpdatePageSize={handleUpdatePageSize} />
			)}
			<Brands />
		</div>
	)
}
export default Home
