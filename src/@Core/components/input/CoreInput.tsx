'use client'
import clsx from 'clsx'
import { memo } from 'react'
import { Control, useController } from 'react-hook-form'

interface CoreInputProps {
	control: Control<any, any>
	name: string
	defaultValue?: any
	rules?: any
	placeholder: string
	type: 'text' | 'number' | 'file'
	id?: string
	label?: string
	showErrorMsg?: Boolean
	className?: string
}

const CoreInput: React.FC<CoreInputProps> = props => {
	const {
		control,
		name,
		id,
		className,
		type = 'text',
		showErrorMsg = true,
		label,
		defaultValue,
		rules,
		placeholder = '',
		...restProps
	} = props

	const {
		field: { value, onBlur, onChange, ref },
		fieldState: { error }
	} = useController({
		name,
		control,
		rules,
		defaultValue
	})

	return (
		<div className={clsx(['flex flex-col gap-8', className && className])}>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				type={type}
				onChange={onChange}
				id={id}
				name={name}
				value={value}
				ref={ref}
				onBlur={onBlur}
				className={clsx([
					'block w-full p-4 pl-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 py-10'
				])}
				placeholder={placeholder}
				{...restProps}
			/>
			{error?.message && showErrorMsg && <span className=" text-red-400 text-[12px]">{error?.message}</span>}
		</div>
	)
}

export default memo(CoreInput)
