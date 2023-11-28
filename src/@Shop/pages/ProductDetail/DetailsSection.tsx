import React from 'react'
import CallToAction from './CallToAction'
import ReactStars from 'react-rating-star-with-type'

interface Props {
	product: any
}
const DetailsSection: React.FC<Props> = ({ product }) => {
	return (
		<div className="bg-palette-card md:bg-transparent w-[100vw] md:w-auto px-8 flex-grow self-center lg:self-start mt-8 md:mt-0 !-mx-[1rem] lg:ltr:ml-4 lg:rtl:mr-4 py-5 md:py-0 rounded-tl-[4rem] rounded-tr-[3rem] flex flex-col z-10">
			<h2 className="text-palette-mute whitespace-normal rtl:md:text-right ltr:md:text-left text-lg font-bold">
				{product.name}
			</h2>
			<hr className="mt-1 hidden md:block" />
			<div className="flex items-start flex-wrap relative">
				<div className="flex-grow mt-6">
					<div className="flex items-center self-center">
						<ReactStars value={product.rate} />
						<p className="text-sm text-palette-mute rtl:mr-2 ltr:ml-2">{product.rate} Start</p>
					</div>
					<h3 className="text-lg mt-4">
						<p className="font-semibold">Product Details</p>
						<div dangerouslySetInnerHTML={{ __html: product.description }} />
					</h3>
				</div>
				<CallToAction product={product} />
			</div>
		</div>
	)
}

export default DetailsSection
