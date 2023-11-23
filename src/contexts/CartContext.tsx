'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useStorage } from '../hooks'
import { STORAGE } from '../const/app-const'

type Props = {
	children: ReactNode
}

interface CartInterface {
	id: number
	product: any
	quantity: number
	sizeProduct: any
}
interface AddCartInterface {
	id: number
	product: any
	quantity: number
	sizeProduct: any
}

const CartContext = React.createContext<any>(null)

export const useCartContext = () => useContext(CartContext)

export const CardContextProvider = (props: any) => {
	const [cart, setCart] = useStorage(STORAGE.LOCAL, 'cart', [])
	const [quantityProduct, setQuantityProduct] = useState(0)

	useEffect(() => {
		setQuantityProduct(cart.length)
	}, [cart])

	function addCart(params: AddCartInterface) {
		const { id, product, quantity, sizeProduct } = params
		const newCart = { id, product, quantity, sizeProduct }
		let checkStatusCart = true
		const itemCheck = cart.find((item: CartInterface) => item.id === id)

		if (itemCheck) {
			cart.forEach((item: CartInterface) => {
				if (item?.id === id) {
					const newQuantity = item.quantity + quantity
					if (newQuantity <= sizeProduct.quantity) {
						item.quantity = newQuantity
						return item
					}
					toast.error('Số lượng sản phẩm này đã tối đa')
					checkStatusCart = false
				}
			})
			setCart([...cart])
		} else {
			setCart([...cart, newCart])
		}

		if (checkStatusCart) toast.success('Thêm sản phẩm thành công')
	}

	function changeCart(id: number, quantity: number) {
		setCart((prev: CartInterface[]) => {
			const item = cart.find((item: CartInterface) => item.id === id)
			if (item) {
				return prev.map(item => {
					if (item?.id === id) {
						item.quantity = quantity
						return item
					}
					return item
				})
			}
			return [...cart]
		})
	}

	function deleteCart(id: number) {
		console.log('🚀 ~ file: CartContext.tsx:109 ~ deleteCart ~ id:', id)
		const index = cart.find((item: CartInterface) => item.id === id)
		if (index !== -1) {
			cart.splice(index, 1)
			setCart([...cart])
		}
	}

	function deleteManyCart(listCode: string[]) {
		const newCart = cart.filter((item: any) => {
			return !listCode.includes(item.product.code)
		})
		setCart(newCart)
	}

	function removeCart() {
		setCart([])
	}

	const data = { cart, quantityProduct, addCart, changeCart, deleteCart, removeCart, deleteManyCart }
	return <CartContext.Provider value={{ ...data }}>{props.children}</CartContext.Provider>
}
