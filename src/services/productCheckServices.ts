import { BaseService } from '@/src/@Core/service/BaseService'

class Product extends BaseService {}

export const productCheckService = new Product('public/product-check')
