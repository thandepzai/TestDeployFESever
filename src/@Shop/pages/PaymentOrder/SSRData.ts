import { useEffect } from 'react'
import { orderService } from '../../services/orderServices'
import { useRequest } from 'ahooks'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useCartContext } from '@/src/contexts/CartContext'
import { useStorage } from '@/src/hooks'
import { STORAGE } from '@/src/const/app-const'

export function createData() {
	const router = useRouter()
	const [order, setOrder] = useStorage(STORAGE.LOCAL, 'order', [])
	const [dataSend, setDadaSend] = useStorage(STORAGE.LOCAL, 'user', {})

	const { removeCart } = useCartContext()

	const { run: createOrder } = useRequest(orderService.save, {
		manual: true,
		onSuccess: data => {
			console.log('🚀 ~ file: SSRData.ts:40 ~ createData ~ data:', data)
			if (data.ok) {
				toast.success(data.msg)
				removeCart()
				setOrder([...order, data.data])
				setDadaSend({})
				router.push(`/don-hang/${data.data.code}`)
			}
		},
		onError: error => {
			console.log('🚀 ~ file: SSRData.ts:44 ~ createData ~ error:', error)
		}
	})

	return { createOrder }
}
