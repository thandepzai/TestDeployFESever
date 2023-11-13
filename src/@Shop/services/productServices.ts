import { BaseService } from '@/src/@Core/service/BaseService'

class Product extends BaseService {}

export const productService = new Product('public/product')
export const productServiceEdit = new Product('public/product/edit')
