'use client'
import React from 'react'
import ImageSection from './ImageSection'
import DetailsSection from './DetailsSection'
import { Benefits } from '@/src/@Core/components'
import SimilarProducts from '@/src/@Core/components/similarProducts/SimilarProducts'
import { getData } from './SSRData'
import CoreSpinner from '@/src/@Core/components/spinner/CoreSpinner'
import { useParams } from 'next/navigation'

const ProductDetail: React.FC = () => {
	const params = useParams()
	const id = params.slug as string
	const { product } = getData(id)

	return (
		<>
			{product === undefined || product === null ? (
				<div className="w-full flex justify-center mt-20">
					<CoreSpinner />
				</div>
			) : (
				<div className="flex flex-col">
					<div className="w-full xl:max-w-[2100px] mx-auto">
						<div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
							<ImageSection imgArray={product.images} />
							<DetailsSection product={product} />
						</div>
						<div className="border-2 my-8">
							<Benefits />
						</div>
						<SimilarProducts code={product.code} />
					</div>
				</div>
			)}
		</>
	)
}

export default ProductDetail
