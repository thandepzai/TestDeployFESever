import React, { useState } from 'react'

interface Props {
	findData: (sorted: string) => void
}
const SortProduct: React.FC<Props> = ({ findData }) => {
	const [selected, setSelected] = useState(null)
	const options = [
		{
			value: 'cheap',
			label: 'Giá từ thấp đến cao'
		},
		{
			value: 'expensive',
			label: 'Giá từ cao đến thấp'
		},
		{
			value: 'new',
			label: 'Sản phẩm mới'
		},
		{
			value: 'popular',
			label: 'Phổ biến'
		}
	]

	const handerChangeSelect = (value: any) => {
		if (selected === value) {
			setSelected(null)
			findData('')
		} else {
			setSelected(value)
			findData(value)
		}
	}

	return (
		<div className="w-full pb-2 border-b-2">
			<h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Lọc:</h3>
			<ul className="grid grid-cols-2 w-full gap-6 md:grid-cols-4">
				{options.map(option => {
					return (
						<li key={option.value}>
							<input
								type="radio"
								id={option.value}
								checked={selected === option.value}
								onChange={() => handerChangeSelect(option.value)}
								name="hosting"
								className="hidden peer"
							/>
							<label
								htmlFor={option.value}
								className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div className="block">
									<div className="w-full text-lg font-semibold">{option.label}</div>
								</div>
							</label>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default SortProduct
