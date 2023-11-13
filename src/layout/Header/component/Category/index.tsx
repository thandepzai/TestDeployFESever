import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsList } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'
import { getBrandData } from '../SSRData'
import { useRouter } from 'next/navigation'

interface Props {
	openMenu: boolean
	handleChangeOpenMenu: () => void
}

export default function CategoryIcon({ openMenu, handleChangeOpenMenu }: Props) {
	const { brands } = getBrandData()
	const router = useRouter()
	const handleOpenBrand = (name: any) => {
		handleChangeOpenMenu()
		router.push(`/danh-muc/${name}`)
	}
	return (
		<>
			<div
				className="flex items-center font-bold cursor-pointer  p-0.5 rounded-md mt-1.5 hover:text-palette-primary"
				onClick={handleChangeOpenMenu}
			>
				<BsList style={{ fontSize: '1.5rem' }} />
				<h4 className="ml-1 mr-1">Dánh sách Hãng</h4>
			</div>
			{brands !== undefined ? (
				<>
					<div className={`z-[1000] ${!openMenu ? 'hidden' : ''}`}>
						<div className="lg:flex flex-col absolute left-5 bg-palette-card z-[110] shadow-md rounded-md overflow-auto">
							<div className="relative my-2">
								<ul className="rounded-lg">
									{brands.map((brand: any, key: number) => {
										const listImages = JSON.parse(brand.images) as string[]
										return (
											<li
												key={key}
												className="py-3 md:py-3 transition-color duration-300 hover:text-palette-primary font-bold border-b block items-center hover:bg-gray-200"
											>
												<div
													className="flex items-center my-1 px-5 cursor-pointer text-sm"
													onClick={() => handleOpenBrand(brand.name)}
												>
													<Image
														src={listImages[0]}
														alt="laptop image"
														width={20}
														height={20}
													/>
													<div className="ml-1 mr-4 grow text-base">{brand.name}</div>
													<AiOutlineRight style={{ fontSize: '1rem' }} />
												</div>
											</li>
										)
									})}
								</ul>
							</div>
						</div>
					</div>
				</>
			) : (
				''
			)}
		</>
	)
}
