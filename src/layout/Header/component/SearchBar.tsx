import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { GoSearch } from 'react-icons/go'

const SearchBar = () => {
	const router = useRouter()
	const [textFind, setTextFind] = useState('')
	const handleSearch = () => {
		if (textFind.length) router.push(`/tim-kiem/${textFind}`)
	}
	return (
		<div className="max-w-[50rem] w-full md:w-[90%] px-4 pr-0 md:ml-4 md:mr-4 rounded-lg bg-slate-600/10 dark:bg-slate-800 flex items-center flex-grow">
			<GoSearch style={{ color: 'rgb(156 163 175)' }} />
			<input
				className="px-4 py-2 md:py-3 bg-transparent outline-none w-3/5 sm:w-3/4 lg:w-10/12"
				type="search"
				placeholder="Nhập để tìm kiếm"
				onChange={e => setTextFind(e.target.value)}
				onKeyDown={e => {
					if (e.key === 'Enter') {
						handleSearch()
					}
				}}
			/>
			<button
				onClick={handleSearch}
				className="py-3 px-1 bg-palette-primary/90 hover:bg-palette-primary/100 rounded-r-lg font-semibold text-white w-2/5 sm:w-1/4 lg:w-2/12"
			>
				Tìm Kiếm
			</button>
		</div>
	)
}

export default SearchBar
