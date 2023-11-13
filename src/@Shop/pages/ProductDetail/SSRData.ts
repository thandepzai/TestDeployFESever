import { useEffect } from 'react'
import { productService, productServiceEdit } from '../../services/productServices'
import { useRequest } from 'ahooks'

export const getData = (id: string) => {
	const { data: data, run: getProduct } = useRequest(productService.find, {
		manual: true
	})

	const { run: postProduct } = useRequest(productServiceEdit.save, {
		manual: true
	})

	useEffect(() => {
		getProduct(id)
		postProduct({ pid: id })
	}, [])
	return { product: data?.data?.product }
}
