import { BaseService } from '@/src/@Core/service/BaseService'

class Product extends BaseService {}

export const productListService = new Product('public/product-list')