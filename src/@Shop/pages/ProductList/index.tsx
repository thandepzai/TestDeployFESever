'use client'
import React from 'react'
import SubmenuCategory from './SubmenuCategory'
import { getData } from './SSRData'
import SortProduct from './SortProduct'
import RenderProduct from './RenderProducts'

const ProductList: React.FC = () => {
	const { products, currentPath, loading, findData } = getData()

	return (
		<div className="mt-10">
			<SubmenuCategory currentPath={currentPath} />
			<SortProduct findData={findData} />
			<RenderProduct loading={loading} products={products} />
		</div>
	)
}

export default ProductList
