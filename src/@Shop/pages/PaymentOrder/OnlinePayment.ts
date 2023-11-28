import onlinePaymentConfig from '@/config/onlinePayment.config'
import moment from 'moment'
import querystring from 'qs'
import crypto from 'crypto'

interface Inputs {
	name: string
	email: string
	phone: number
	address: string
	paymentMethod: string
}

const sortObject = (obj: any) => {
	let sorted = <any>{}
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

export const processingPayment = (dataSend: Inputs | undefined, cart: any) => {
	if (dataSend !== undefined) {
		localStorage.setItem('user', JSON.stringify(dataSend))
	}

	let sumPrice = 0
	cart.forEach((item: any) => {
		sumPrice += item.quantity * item.sizeProduct.price
	})

	process.env.TZ = 'Asia/Ho_Chi_Minh'

	let date = new Date()
	let createDate = moment(date).format('YYYYMMDDHHmmss')

	const ipAddr = window?.location?.hostname || window?.location?.host || window?.location?.href || ''
	const currentURL = window.location.href
	const baseURL = currentURL.split('/').slice(0, 3).join('/')

	let tmnCode = onlinePaymentConfig.vnp_TmnCode
	let secretKey = onlinePaymentConfig.vnp_HashSecret
	let vnpUrl = onlinePaymentConfig.vnp_Url
	let returnUrl = `${baseURL}/thanh-toan/online`
	let orderId = moment(date).format('DDHHmmss')
	let amount = sumPrice
	let bankCode = ''

	let locale = 'vn'
	if (locale === null || locale === '') {
		locale = 'vn'
	}
	let currCode = 'VND'
	let vnp_Params: any = {
		vnp_Version: '2.1.0',
		vnp_Command: 'pay',
		vnp_TmnCode: tmnCode,
		vnp_Locale: locale,
		vnp_CurrCode: currCode,
		vnp_TxnRef: orderId,
		vnp_OrderInfo: 'Thanh toan cho ma GD:' + orderId,
		vnp_OrderType: 'other',
		vnp_Amount: amount * 100,
		vnp_ReturnUrl: returnUrl,
		vnp_IpAddr: ipAddr,
		vnp_CreateDate: createDate
	}

	vnp_Params = sortObject(vnp_Params)

	let signData = querystring.stringify(vnp_Params, { encode: false })
	const hmac = crypto.createHmac('sha512', secretKey)
	const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex')
	vnp_Params['vnp_SecureHash'] = signed
	vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false })
	window.location.assign(vnpUrl)
}
