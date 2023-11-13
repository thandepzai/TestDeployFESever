import { useEffect } from 'react'
import { orderCancelService, orderService } from '../../../services/orderServices'
import { useRequest } from 'ahooks'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export const getData = (code: string) => {
	const { data: data, run: getDetailOrder } = useRequest(orderService.find, {
		manual: true
	})

	useEffect(() => {
		getDetailOrder(code)
	}, [])
	return { order: data?.data }
}

export function RemoveCart() {
	const router = useRouter()

	const { run: removeOrder } = useRequest(orderCancelService.save, {
		manual: true,
		onSuccess: data => {
			console.log('🚀 ~ file: SSRData.ts:40 ~ createData ~ data:', data)
			if (data.ok) {
				toast.success(data.msg)
				router.push(`/don-hang`)
			}
		},
		onError: error => {
			console.log('🚀 ~ file: SSRData.ts:44 ~ createData ~ error:', error)
		}
	})

	return { removeOrder }
}
