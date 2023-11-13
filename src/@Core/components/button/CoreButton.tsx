import { ReactNode, memo } from 'react'
import CoreSpinner from '../spinner/CoreSpinner'
import React from 'react'
import clsx from 'clsx'
interface CoreButtonProps {
	variant: 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple'
	type: 'submit' | 'button'
	children: ReactNode
	onClick?: () => void
	loading?: Boolean
	className?: string
}

const CoreButton: React.FC<CoreButtonProps> = props => {
	const { type, variant = 'default', children, className = '', onClick, loading = false } = props
	let classNames =
		'focus:outline-none text-sm font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 focus:ring-1 dark:rounded-lg'
	let colorClass = ''
	let hoverColorClass = ''
	let focusRingClass = ''

	switch (variant) {
		case 'default':
			colorClass = 'text-white bg-blue-500'
			hoverColorClass = 'hover:bg-blue-600'
			focusRingClass = 'focus:ring-blue-300'
			break
		case 'light':
			colorClass = 'text-gray-900 bg-white border border-gray-300'
			hoverColorClass = 'hover:bg-gray-100'
			focusRingClass = 'focus:ring-gray-200'
			break
		case 'green':
			colorClass = 'text-white bg-green-700'
			hoverColorClass = 'hover:bg-green-800'
			focusRingClass = 'focus:ring-green-300'
			break
		case 'red':
			colorClass = 'text-white bg-red-700'
			hoverColorClass = 'hover:bg-red-800'
			focusRingClass = 'focus:ring-red-300'
			break
		case 'yellow':
			colorClass = 'text-white bg-yellow-400'
			hoverColorClass = 'hover:bg-yellow-500'
			focusRingClass = 'focus:ring-yellow-300'
			break
		default:
			break
	}

	classNames += ` ${colorClass} ${hoverColorClass} ${focusRingClass}`

	return (
		<button className={clsx(className, classNames)} onClick={onClick && onClick} type={type}>
			{loading ? <CoreSpinner /> : children}
		</button>
	)
}

export default memo(CoreButton)
