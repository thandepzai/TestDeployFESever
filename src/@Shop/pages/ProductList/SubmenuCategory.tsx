import React from 'react'

interface Props {
	currentPath: string
}

const SubmenuCategory = ({ currentPath }: Props) => {
	const source = currentPath.split('/')

	if (source[1] === 'danh-muc')
		return <div className="flex md:items-center flex-col text-xl font-semibold">{source[2]}</div>
	return <div className="flex flex-col text-lg font-semibold">Tìm kiếm: {source[2]}</div>
}

export default SubmenuCategory
