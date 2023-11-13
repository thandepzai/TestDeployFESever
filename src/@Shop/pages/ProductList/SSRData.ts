import { useEffect, useState } from 'react'
import { productListService } from '../../services/productListServices'
import { useRequest } from 'ahooks'

export const getData = () => {
	const [currentPath, setCurrentPath] = useState('')
	console.log('🚀 ~ file: SSRData.ts:7 ~ getData ~ currentPath:', currentPath)

	const regex = /danh-muc|tim-kiem/
	useEffect(() => {
		setCurrentPath(window.location.pathname)
	}, [])

	const {
		data: data,
		loading: loading,
		run: getProduct
	} = useRequest(productListService.search, {
		manual: true
	})

	useEffect(() => {
		if (regex.test(currentPath)) {
			getProduct({ params: { page: 1, pageSize: 1000, currentPath } })
		}
	}, [currentPath])

	const findData = (sorted: string) => {
		console.log('🚀 ~ file: SSRData.ts:20 ~ findData ~ sorted:', sorted)
		const params = { page: 1, pageSize: 1000, currentPath, sorted }
		getProduct({ params })
	}

	return { products: data?.data?.dataTable, loading, findData, currentPath }
}
