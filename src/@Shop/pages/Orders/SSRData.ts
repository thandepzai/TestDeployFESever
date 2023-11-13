import { orderService } from '../../services/orderServices'
import { useRequest } from 'ahooks'

export const getOrder = () => {
	const { data: data, run: getListOrder } = useRequest(orderService.search, {
		manual: true
	})

	return { data: data?.data?.dataTable, getListOrder }
}
