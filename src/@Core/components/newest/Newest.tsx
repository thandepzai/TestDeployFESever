import React from 'react'
import Link from 'next/link'
import Card from '../productCard/Card'

const Newest = (params: any) => {
	const { products, handleUpdatePageSize } = params
	console.log('🚀 ~ file: Newest.tsx:6 ~ Newest ~ products:', products)
	return (
		<div className="mx-auto my-4 md:my-8 flex flex-col xl:max-w-[2130px]">
			<h2 className="my-4 md:my-8 lg:mt-10 mx-auto text-3xl">Newest Goods</h2>

			<div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 ">
				{products.dataTable.map((product: any) => {
					return <Card key={product.name} product={product} />
				})}
			</div>

			<div className="text-center">
				<button
					onClick={handleUpdatePageSize}
					className="inline-block py-3 px-8 md:px-12 mt-4 text-sm md:text-base bg-palette-primary text-palette-side rounded-xl shadow-lg bg-palette-primary/90 hover:bg-palette-primary/100"
				>
					See More
				</button>
			</div>
		</div>
	)
}

export default Newest
