import React from 'react'
import { CarouselBoxCard, CarouselBox } from '@/src/@Core/components'
import { getSimilar } from '@/src/@Core/provider/ClientProvider'
interface Props {
	code: string
}
const SimilarProducts: React.FC<Props> = ({ code }) => {
	const { productSimilar } = getSimilar(code)
	const checked = productSimilar === undefined || productSimilar.length === 0 ? true : false
	return (
		<div>
			<CarouselBox title="Sản phẩm tương tự" full={true} checked={checked}>
				{!checked &&
					productSimilar.map((product: any, key: number) => <CarouselBoxCard key={key} product={product} />)}
			</CarouselBox>
		</div>
	)
}

export default SimilarProducts
