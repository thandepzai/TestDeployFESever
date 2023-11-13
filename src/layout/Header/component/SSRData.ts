import { useEffect } from 'react'
import { useRequest } from 'ahooks'
import { brandService } from '@/src/@Shop/services/brandServices'

export const getBrandData = () => {
	const { data: data, run: getBrand } = useRequest(brandService.search, {
		manual: true
	})

	useEffect(() => {
		getBrand({ params: { page: 1, pageSize: 1000 } })
	}, [])
	return { brands: data?.data?.dataTable }
}
