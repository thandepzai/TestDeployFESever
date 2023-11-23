import onlinePaymentConfig from '@/config/onlinePayment.config'
import querystring from 'qs'
import crypto from 'crypto'

const sortObject = (obj: any) => {
	let sorted: any = {}
	let str = []
	let key
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			str.push(encodeURIComponent(key))
		}
	}
	str.sort()
	for (key = 0; key < str.length; key++) {
		sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+')
	}

	return sorted
}

declare const window: any
function extractURLParameters() {
	let currentURL = ''
	if (typeof window !== 'undefined') {
		currentURL = window.location.href
		const url = new URL(currentURL)
		return {
			vnp_Amount: url.searchParams.get('vnp_Amount'),
			vnp_BankCode: url.searchParams.get('vnp_BankCode'),
			vnp_BankTranNo: url.searchParams.get('vnp_BankTranNo'),
			vnp_CardType: url.searchParams.get('vnp_CardType'),
			vnp_OrderInfo: url.searchParams.get('vnp_OrderInfo'),
			vnp_PayDate: url.searchParams.get('vnp_PayDate'),
			vnp_ResponseCode: url.searchParams.get('vnp_ResponseCode'),
			vnp_TmnCode: url.searchParams.get('vnp_TmnCode'),
			vnp_TransactionNo: url.searchParams.get('vnp_TransactionNo'),
			vnp_TransactionStatus: url.searchParams.get('vnp_TransactionStatus'),
			vnp_TxnRef: url.searchParams.get('vnp_TxnRef'),
			vnp_SecureHash: url.searchParams.get('vnp_SecureHash')
		}
	}
	return {
		vnp_Amount: '',
		vnp_BankCode: '',
		vnp_BankTranNo: '',
		vnp_OrderInfo: '',
		vnp_PayDate: '',
		vnp_ResponseCode: '',
		vnp_TmnCode: '',
		vnp_TransactionNo: '',
		vnp_TransactionStatus: '',
		vnp_TxnRef: '',
		vnp_SecureHash: ''
	}
}

export const paymentReturn = () => {
	const vnp_Params = extractURLParameters()
	const sortedParams = sortObject(vnp_Params)

	if ('vnp_SecureHash' in sortedParams) {
		delete sortedParams['vnp_SecureHash']
	}
	if ('vnp_SecureHashType' in sortedParams) {
		delete sortedParams['vnp_SecureHashType']
	}

	const secureHash = vnp_Params['vnp_SecureHash']

	const secretKey = onlinePaymentConfig.vnp_HashSecret

	const signData = querystring.stringify(sortedParams, { encode: false })
	const hmac = crypto.createHmac('sha512', secretKey)
	const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex')

	const check = secureHash !== null && secureHash === signed

	return { check, code: vnp_Params.vnp_TxnRef }
}
