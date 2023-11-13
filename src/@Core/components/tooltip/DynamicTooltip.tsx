'use client'
import { ReactNode, useState } from 'react'

// interface DynamicTooltipProps {
// 	children: ReactNode
// }
export const useDynamicToolTip = (children: ReactNode) => {
	const [tooltipVisible, setTooltipVisible] = useState(false)
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

	const handleMouseEnter = (event: React.MouseEvent) => {
		console.log('ajsdhfasdjk')
		setTooltipVisible(true)
	}

	const handleMouseMove = (event: React.MouseEvent) => {
		setTooltipPosition({ x: event.clientX, y: event.clientY })
	}

	const handleMouseLeave = () => {
		setTooltipVisible(false)
	}

	const renderToolTip = () => {
		return (
			tooltipVisible && (
				<div
					className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm"
					style={{
						left: tooltipPosition.x + 10, // Offset the tooltip slightly from the mouse pointer
						top: tooltipPosition.y + 10
					}}
				>
					Tooltip content
					{children}
				</div>
			)
		)
	}

	return {
		eventDynamicTooltip: {
			onMouseEnter: handleMouseEnter,
			onMouseMove: handleMouseMove,
			onMouseLeave: handleMouseLeave
		},
		renderToolTip
	}
}
