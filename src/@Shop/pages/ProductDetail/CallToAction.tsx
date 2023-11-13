'use client'
import React, { useEffect, useState } from 'react'
import { HiOutlinePlusSm, HiMinusSm } from 'react-icons/hi'
import { BsCartPlus } from 'react-icons/bs'
import { useCartContext } from '@/src/contexts/CartContext'
interface Props {
	product: any
}
const CallToAction: React.FC<Props> = ({ product }) => {
	console.log('🚀 ~ file: CallToAction.tsx:13 ~ product:', product)
	const { sizeProduct } = product
	const [counter, setCounter] = useState(1)
	const [sizeChoose, setSizeChoose] = useState(sizeProduct[0])

	const { addCart } = useCartContext()
	useEffect(() => {
		setCounter(1)
	}, [product])

	function addToCartHandler() {
		addCart({
			id: sizeChoose.id,
			product: product,
			quantity: counter,
			sizeProduct: sizeChoose
		})
	}

	function increment() {
		if (counter < sizeChoose.quantity) {
			setCounter(prev => prev + 1)
		}
	}
	function decrement() {
		if (counter > 1) {
			setCounter(prev => prev - 1)
		}
	}

	function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= sizeChoose.quantity) {
			setCounter(+e.currentTarget.value)
		}
	}
	const handleChangeSize = (event: any) => {
		const index = Number(event.target.value)
		setSizeChoose(sizeProduct[index])
	}

	return (
		<div className="flex flex-col items-center flex-grow sticky top-10 md:top-36 max-w-[350px] mt-8 rtl:mr-auto ltr:ml-auto xl:rtl:ml-2 px-6 py-4 sm:p-4 xl:p-6 border-2 shadow-lg">
			<div className="flex flex-col w-full ">
				<p className="text-lg">
					Product price:{' '}
					<span className="font-semibold">
						{sizeChoose.price.toLocaleString('vi-VN', {
							style: 'currency',
							currency: 'VND',
							currencyDisplay: 'code'
						})}
					</span>
				</p>
				<div>
					<h3 className="text-lg font-medium text-gray-500 mb-2">Size</h3>
					<ul className="grid w-full gap-2 grid-cols-4">
						{sizeProduct.map((item: any, key: number) => {
							return (
								<li key={key}>
									<input
										type="radio"
										id={String(key)}
										name="hosting"
										value={String(key)}
										className="hidden peer"
										onChange={handleChangeSize}
										required
									/>
									<label
										htmlFor={String(key)}
										className="inline-flex w-full p-2 text-gray-500 bg-white border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
									>
										<p className="w-full text-center">{item.size}</p>
									</label>
								</li>
							)
						})}
					</ul>
					<h3 className="text-sm mt-2">
						{sizeChoose.quantity > 0 ? `${sizeChoose.quantity} sản phẩm có sẵn` : `Không có sản phẩm nào`}
					</h3>
				</div>
			</div>
			<div className="flex items-center justify-between mt-6 cursor-pointer">
				<div className="p-2" onClick={increment}>
					<HiOutlinePlusSm style={{ fontSize: '1.5rem' }} />
				</div>
				<input
					className="inline-block w-[70px] rtl:pr-8 ltr:pl-7 py-2 px-2 mx-1 sm:mx-4 border-[1px] border-gray-400"
					type="number"
					min={1}
					max={sizeChoose.quantity}
					value={counter}
					onChange={onInputNumberChangeHandler}
				/>
				<div onClick={decrement} className="p-2">
					<HiMinusSm style={{ fontSize: '1.5rem' }} />
				</div>
			</div>
			<br />
			<button
				className="border-none bg-palette-primary/90 hover:bg-palette-primary/100 transition-colors duration-200 shadow-lg px-3 lg:px-8 py-4 text-palette-side flex items-center rounded-lg cursor-pointer  text-[12px] sm:text-base"
				onClick={addToCartHandler}
			>
				<BsCartPlus style={{ fontSize: '1.2rem', margin: '0 0.4rem' }} />
				ADD TO CARD
			</button>
		</div>
	)
}

export default CallToAction
