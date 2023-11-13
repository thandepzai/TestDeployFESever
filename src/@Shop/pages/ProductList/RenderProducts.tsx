import React from 'react'
import Card from '@/src/@Core/components/productCard/Card'
import { getData } from './SSRData'
import CartLoading from '@/src/@Core/components/loading/CartLoading'

interface Props {
	products: any
	loading: boolean
}

const RenderProduct: React.FC<Props> = ({ loading, products }) => {
	return (
		<>
			{products === undefined || loading || products.length === 0 ? (
				<CartLoading />
			) : (
				<div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 ">
					{products.map((product: any) => {
						return <Card key={product.name} product={product} />
					})}
				</div>
			)}
		</>
	)
}

export default RenderProduct
