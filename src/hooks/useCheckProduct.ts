import { useEffect } from 'react'
import { useRequest } from 'ahooks'
import { productCheckService } from '../services/productCheckServices'

interface Props {
	cart: any
	deleteManyCart: any
}
export const useCheckProduct = ({ cart, deleteManyCart }: Props) => {
	const { run: getProductDelete } = useRequest(productCheckService.save, {
		manual: true,
		onSuccess: data => {
			const listCartDelete = data.data.dataTable
			deleteManyCart(listCartDelete)
		},
		onError: error => {
			console.log('🚀 ~ file: useCheckProduct.ts:16 ~ useCheckProduct ~ error:', error)
		}
	})

	useEffect(() => {
		const listCodeProduct = cart.map((item: any) => item.product.code)
		getProductDelete({ listCodeProduct })
	}, [])
}
