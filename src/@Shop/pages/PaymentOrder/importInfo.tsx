'use client'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
	name: string
	email: string
	phone: number
	address: string
	paymentMethod: string
}
interface Params {
	onSubmit: SubmitHandler<Inputs>
	dataSend: Inputs | undefined
}

const ImportInfo: React.FC<Params> = ({ onSubmit, dataSend }) => {
	let {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>({
		defaultValues: dataSend
	})

	const renderError = (value: 'name' | 'email' | 'phone' | 'address' | 'paymentMethod') => {
		if (errors[`${value}`]?.type === 'required') {
			return <span className="text-red-500">Không để trống</span>
		} else if (errors.name?.type === 'pattern') {
			return <span className="text-red-500">Nhập đúng định dạng</span>
		}
	}

	return (
		<div>
			<div className="w-full text-center text-3xl text-emerald-600 mb-4 font-bold">Đặt Hàng</div>
			<form onSubmit={handleSubmit(onSubmit)} className="w-full">
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						{...register('name', { required: true, pattern: /^[\p{L}]+([\s][\p{L}]+)*$/u })}
					/>
					{renderError('name')}
				</div>
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						{...register('email', {
							required: true,
							pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i
						})}
					/>
					{renderError('email')}
				</div>
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Số điện thoại
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						{...register('phone', {
							required: true,
							pattern: /^\d{10}$/
						})}
					/>
					{renderError('phone')}
				</div>
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						{...register('address', {
							required: true
						})}
					/>
					{renderError('address')}
				</div>
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Chọn phương thức thanh toán:
					</label>
					<select
						{...register('paymentMethod', { required: true })}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						<option value="cash">Thanh toán khi nhận hàng</option>
						<option value="wallet">Thanh toán qua ví điện tử</option>
					</select>
					{renderError('paymentMethod')}
				</div>
				<div className="w-full text-center">
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Tiếp Tục
					</button>
				</div>
			</form>
		</div>
	)
}

export default ImportInfo
