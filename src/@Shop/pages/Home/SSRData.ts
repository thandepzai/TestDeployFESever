import { useEffect, useState } from 'react'
import { productService } from '../../services/productServices'
import { useRequest } from 'ahooks'

export const getData = () => {
	const [pageSize, setPageSize] = useState(24)
	const handleUpdatePageSize = () => {
		setPageSize(pageSize + 24)
	}
	const {
		data: data,
		loading: loadingGetProduct,
		run: getProduct
	} = useRequest(productService.search, {
		manual: true
	})

	useEffect(() => {
		getProduct({ params: { page: 1, pageSize } })
	}, [pageSize])

	return { products: data?.data, loadingGetProduct, handleUpdatePageSize }
}
