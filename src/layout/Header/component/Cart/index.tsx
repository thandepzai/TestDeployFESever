import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Image from 'next/image'
import { Transition } from 'react-transition-group'
import { useCartContext } from '@/src/contexts/CartContext'
import { useCheckProduct } from '@/src/hooks/useCheckProduct'

const CartIcon: React.FC = () => {
	const [isHovered, setIsHovered] = useState(false)
	const { cart, quantityProduct, deleteManyCart } = useCartContext()
	const nodeRef = React.useRef(null)
	useCheckProduct({ cart, deleteManyCart })

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}
	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<Link
				href="/gio-hang"
				className="relative flex items-center md:pl-6 md:pr-6 md:border-r-2 md:border-r-slate-300 md:border-l-2 md:border-l-slate-300 z-50"
			>
				<AiOutlineShoppingCart style={{ fontSize: '1.6rem' }} />
				<span className="absolute -top-3 -right-[0.3rem] md:right-[1rem]  flex items-center justify-center w-5 h-5 pt-[0.1rem] rounded-full bg-palette-primary text-[0.75rem] leading-3 text-white shadow-lg">
					{quantityProduct}
				</span>
			</Link>
			<Transition nodeRef={nodeRef} in={isHovered} timeout={3000} mountOnEnter unmountOnExit>
				<div className="z-[100]">
					<div className="hidden lg:flex flex-col absolute top-10 right-16 min-h-[15rem] max-h-[25rem] w-[20rem] bg-palette-card z-[110] shadow-md rounded-lg overflow-auto">
						<div className="relative">
							<header className="flex items-center justify-between sticky top-0 left-0 right-0 text-sm font-normal z-10 bg-palette-card p-2">
								<span>{cart?.length ?? 0} Sản Phẩm</span>
								<span>
									<Link href="/gio-hang" className="text-cyan-500">
										Xem giỏ hàng
									</Link>
								</span>
							</header>
							<hr className="mt-2" />
							<div>
								<>
									{cart.length ? (
										cart.map((item: any, key: number) => {
											const listImages = JSON.parse(item.product.images) as string[]
											return (
												<div
													className="flex items-center flex-wrap sm:my-2 sm:py-4 px-2 border-b-2 hover:bg-slate-200"
													key={key}
												>
													<div className="lg:w-1/2 sm:min-w-[290px]">
														<Link
															href={`/san-pham/${item.id}`}
															className="flex flex-wrap sm:flex-nowrap justify-center items-center flex-grow h-full"
														>
															<div className="w-20">
																<Image
																	src={listImages[0]}
																	width={50}
																	height={50}
																	alt={item.product.name}
																	className="object-contain"
																/>
															</div>
															<div className="flex justify-between text-sm font-normal mb-2 sm:mb-0 mx-2 w-full">
																<div>
																	<p>
																		{item.product.name}: ⨉{item.quantity}
																	</p>
																	<p>Size: {item.sizeProduct.size}</p>
																</div>
																<div>
																	{item.sizeProduct.price.toLocaleString('vi-VN', {
																		style: 'currency',
																		currency: 'VND',
																		currencyDisplay: 'code'
																	})}
																</div>
															</div>
														</Link>
													</div>
												</div>
											)
										})
									) : (
										<p className="mt-20 text-center text-palette-mute font-normal">
											Giỏ hàng trống
										</p>
									)}
								</>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	)
}

export default CartIcon
