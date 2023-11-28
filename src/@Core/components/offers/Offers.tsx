import React from 'react'
import CarouselBox from '../carouselBox/CarouselBox'
import CarouselBoxCard from '../carouselBox/CarouselBoxCard'
import { getSession } from '../../provider/ClientProvider'

const Offers = () => {
	const { productSuggest } = getSession()
	console.log('🚀 ~ file: Offers.tsx:8 ~ Offers ~ productSuggest:', productSuggest)
	const checked = productSuggest === undefined || productSuggest.length === 0 ? true : false
	return (
		<div className="md:mt-10 w-full xl:max-w-[2100px] mx-auto">
			<CarouselBox title="Gợi Ý" className="bg-offersBG" href="/" checked={checked}>
				{!checked &&
					productSuggest.map(
						(product: any, key: number) => key !== 0 && <CarouselBoxCard key={key} product={product[0]} />
					)}
			</CarouselBox>
		</div>
	)
}

export default Offers
