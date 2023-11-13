export interface ProductClassificationProps {
	id: number
	name: string
	price: number
	quantity: number
	productId: number
	warrantyTime: number
}

export interface ProductCardProps {
	category: string
	id: number
	name: string
	status: string
	images: string
	classifications: ProductClassificationProps[]
}
