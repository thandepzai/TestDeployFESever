import React, { useState } from 'react'
import { BsList } from 'react-icons/bs'
import DefaultSidebar from './SideBar'

const SideBarMenu = () => {
	const [opentSideBar, setOpenSideBar] = useState(true)
	const handeChangeSideBar = () => {
		setOpenSideBar(!opentSideBar)
	}
	return (
		<div className="md:hidden">
			<DefaultSidebar opentSideBar={opentSideBar} handeChangeSideBar={handeChangeSideBar} />
			<div className="absolute left-0 -top-2" onClick={handeChangeSideBar}>
				<BsList style={{ fontSize: '2rem' }} />
			</div>
		</div>
	)
}

export default SideBarMenu
