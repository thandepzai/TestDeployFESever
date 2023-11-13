'use client'
import React, { useState } from 'react'
import Logo from './component/Logo'
import SearchBar from './component/SearchBar'
import CartIcon from './component/Cart'
import CategoryIcon from './component/Category'
import SideBarMenu from './component/SideBarMenu'
import OrderIcon from './component/Order'

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const handleChangeOpenMenu = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<>
			<header className="md:fixed left-0 right-0 top-0 bg-palette-fill shadow-sm pt-4 md:pt-0 z-[1000]">
				<div className="flex flex-col px-5">
					<div className="flex items-center justify-center md:order-2 md:mt-2 relative">
						<div className="md:hidden">
							<SideBarMenu />
							<Logo />
							<div className="absolute right-0 -top-2 pt-2 flex">
								<OrderIcon />
								<CartIcon />
							</div>
						</div>
					</div>
					<hr className="md:hidden mt-2" />
					<div className="my-4 md:mt-4 flex items-center md:order-1">
						<div className="hidden md:block">
							<Logo />
							<CategoryIcon handleChangeOpenMenu={handleChangeOpenMenu} openMenu={openMenu} />
						</div>
						<div className="flex-grow">
							<SearchBar />
						</div>
						<div className="ltr:ml-2 rtl:mr-2 smml-4 ml-4 items-center justify-between hidden md:flex">
							<OrderIcon />
							<CartIcon />
						</div>
					</div>
				</div>
			</header>
			<div
				className={`md:fixed inset-0 z-[999] bg-black/60 opacity-100 ${openMenu ? '' : 'hidden'}`}
				onClick={handleChangeOpenMenu}
			/>
		</>
	)
}

export default Header
