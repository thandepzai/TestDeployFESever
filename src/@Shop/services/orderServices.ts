import { BaseService } from '@/src/@Core/service/BaseService'

class Order extends BaseService {}

export const orderService = new Order('public/order')
export const orderCancelService = new Order('public/cancel-order')
