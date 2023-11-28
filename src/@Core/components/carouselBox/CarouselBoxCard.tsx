import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
	product: any
}

const CarouselBoxCard: React.FC<Props> = ({ product }) => {
	const router = useRouter()
	const minPrices = product?.minPrice.toLocaleString('vi-VN', {
		style: 'currency',
		currency: 'VND',
		currencyDisplay: 'code'
	})
	const listImages = JSON.parse(product?.images) as string[]
	const handleGetDetail = () => {
		router.push(`/san-pham/${product?.id}`)
	}
	return (
		<div className="w-full h-full px-2 my-2">
			<div
				onClick={handleGetDetail}
				className="flex flex-col w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md"
			>
				<div className="text-center flex justify-center	">
					<Image
						src={listImages[0]}
						alt="laptop image"
						width={200}
						height={185}
						className="object-contain hover:scale-105 transition-transform !p-2"
					/>
				</div>
				<p className="truncate">{product?.name}</p>
				<div className="flex rtl:justify-end rtl:self-end ltr:self-start text-left mt-2 w-full">
					<div
						className="flex items-center text-md md:text-lg font-bold no-underline w-full"
						style={{ flexDirection: 'row' }}
					>
						<sup className="mr-1 rtl:block">₫</sup>
						<span className="truncate">{minPrices}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarouselBoxCard
