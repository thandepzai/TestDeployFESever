import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../Logo'
import { getBrandData } from '../SSRData'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface Props {
	opentSideBar: boolean
	handeChangeSideBar: () => void
}

export default function DefaultSidebar({ opentSideBar, handeChangeSideBar }: Props) {
	const { brands } = getBrandData()
	const router = useRouter()
	const handleOpenBrand = (name: any) => {
		handeChangeSideBar()
		router.push(`/danh-muc/${name}`)
	}
	return (
		<>
			<aside
				id="logo-sidebar"
				className={`fixed top-0 left-0 z-[1000] w-64 h-screen transition-transform ${
					opentSideBar ? '-translate-x-full' : '-translate-x-0'
				}`}
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<div>
						<div className="pt-1 pb-3 ltr:pl-4 rtl:pr-5">
							<Logo />
						</div>
						<div className={`text-2xl cursor-pointer absolute right-3 top-5`} onClick={handeChangeSideBar}>
							<AiOutlineClose />
						</div>
						<hr />
					</div>
					<ul className="space-y-2 font-medium mt-2">
						{brands !== undefined &&
							brands.map((brand: any, key: number) => {
								const listImages = JSON.parse(brand.images) as string[]
								return (
									<li
										className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
										onClick={() => handleOpenBrand(brand.name)}
										key={key}
									>
										<Image src={listImages[0]} alt="laptop image" width={20} height={20} />
										<span className="ml-3">{brand.name}</span>
									</li>
								)
							})}
					</ul>
				</div>
			</aside>
			<div
				className={` fixed inset-0 z-[999] bg-black/60 opacity-100 ${opentSideBar ? 'hidden' : ''}`}
				onClick={handeChangeSideBar}
			/>
		</>
	)
}
