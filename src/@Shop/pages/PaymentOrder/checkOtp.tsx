import CoreSpinner from '@/src/@Core/components/spinner/CoreSpinner'
import { SetStateAction, useEffect, useState } from 'react'
import { BsFillShieldFill, BsTelephoneFill } from 'react-icons/bs'
import OTPInput from 'react-otp-input'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { Toaster } from 'react-hot-toast'
import { toast } from 'react-toastify'
import { auth } from './firebase.config'
import { LoadingIcon, SuccessIcon } from '@/src/@Core/components/paymentIcon'
import { createData } from './SSRData'
interface Inputs {
	name: string
	email: string
	phone: number
	address: string
	paymentMethod: string
}
interface Props {
	dataSend: Inputs | undefined
	setChangeStatus: (value: SetStateAction<boolean>) => void
	cart: any
}
declare const window: any
const CheckOtp: React.FC<Props> = ({ dataSend, setChangeStatus, cart }) => {
	const [otp, setOtp] = useState('')
	const [ph, setPh] = useState(`+84 ${String(dataSend?.phone)}`)
	const [loading, setLoading] = useState(false)
	const [showOTP, SetShowOtp] = useState(false)
	const [user, setUSer] = useState(null)
	const [checkOrder, setChekOrder] = useState(false)
	const { createOrder } = createData()

	// Data for CAll APi
	useEffect(() => {
		if (dataSend && checkOrder) {
			const { name, phone, email, address, paymentMethod } = dataSend
			let sumPrice = 0,
				sumQuantity = 0
			const items = cart.map((item: any) => {
				sumPrice += item.quantity * item.sizeProduct.price
				sumQuantity += item.quantity
				return {
					sizeProductId: item.id,
					quantity: item.quantity
				}
			})
			const customerInfo = {
				name,
				phone,
				email,
				address
			}
			const paymentInfo = {
				status: 'chua thanh toan',
				amount: sumPrice,
				quantity: sumQuantity,
				method: paymentMethod,
				note: 'Khong co'
			}
			createOrder({ items, customerInfo, paymentInfo })
		}
	}, [checkOrder])

	function onCaptchVerify() {
		window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
			size: 'invisible',
			callback: (response: any) => {
				onSignup()
			},
			'expired-callback': () => {}
		})
	}

	const onSignup = () => {
		setLoading(true)
		onCaptchVerify()
		const appVerifier = window.recaptchaVerifier
		const formatPh = '+' + ph

		signInWithPhoneNumber(auth, formatPh, appVerifier)
			.then(confirmationResult => {
				window.confirmationResult = confirmationResult
				setLoading(false)
				SetShowOtp(true)
				toast.success('OTP sened successfully!')
			})
			.catch(error => {
				console.log('🚀 ~ file: checkOtp.tsx:92 ~ onSignup ~ error:', error)
				setLoading(false)
			})
	}

	const onOTPVerify = (params: any) => {
		setLoading(true)
		window.confirmationResult
			.confirm(otp)
			.then(async (res: { user: SetStateAction<null> }) => {
				console.log(res)
				setUSer(res.user)
				setLoading(false)
				setChekOrder(true)
			})
			.catch((err: any) => {
				console.log('🚀 ~ file: checkOtp.tsx:58 ~ window.confirmationResult.confirm ~ err:', err)
				setLoading(false)
			})
	}
	return (
		<section className="flex items-center justify-center md:py-52">
			<div>
				<Toaster toastOptions={{ duration: 4000 }} />
				<div id="recaptcha-container"></div>
				{user ? (
					<div>
						<div className="flex items-center">
							<SuccessIcon />
							<h2 className="text-center text-black font-medium text-2xl">
								Xác nhận thành công đơn hàng của bạn đã được đặt
							</h2>
						</div>
						<div className="flex items-center w-full justify-center">
							<h2 className="text-center text-black font-medium text-2xl mr-2">Vui lòng chờ</h2>
							<div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s] mr-1" />
							<div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s] mr-1" />
							<div className="h-2 w-2 bg-black rounded-full animate-bounce" />
						</div>
					</div>
				) : (
					<div className="w-80 flex flex-col gap-4 rounded-lg p-4">
						<h1 className="text-center leading-normal text-black font-medium text-3xl mb-6">
							Xác nhận thông tin
						</h1>
						{showOTP ? (
							<>
								<div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
									<BsFillShieldFill size={30} />
								</div>
								<label htmlFor="otp" className="font-bold text-center">
									Nhập OTP
								</label>
								<div className="flex justify-center text-2xl">
									<OTPInput
										value={otp}
										onChange={setOtp}
										numInputs={6}
										renderSeparator={<span>-</span>}
										renderInput={props => <input {...props} />}
									></OTPInput>
								</div>
								<button
									onClick={onOTPVerify}
									className="bg-emerald-900 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
								>
									{loading && <LoadingIcon />}
									Xác nhận OTP
								</button>
							</>
						) : (
							<>
								<div className="bg-white w-fit mx-auto p-4 rounded-full">
									<BsTelephoneFill size={30} />
								</div>
								<label htmlFor="" className="font-bold text-center">
									Xác minh số điện thoại của bạn
								</label>
								<div className="bg-emerald-500 flex justify-center text-2xl -ml-1">
									<PhoneInput country={'vn'} value={ph} onChange={setPh} />
								</div>
								<button
									onClick={onSignup}
									className="bg-emerald-900 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
								>
									{loading && <LoadingIcon />}
									Gửi mã SMS
								</button>
								<button
									onClick={() => setChangeStatus(true)}
									// onClick={() => setChekOrder(true)}
									className="bg-emerald-900 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
								>
									Quay lại
								</button>
							</>
						)}
					</div>
				)}
			</div>
		</section>
	)
}

export default CheckOtp
