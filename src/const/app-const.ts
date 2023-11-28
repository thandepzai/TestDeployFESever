export const textWhite = '#fff'

export enum ROLE {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

export const PATH = {
	LOGIN: 'dang-nhap',
	REGISTER: 'dang-ky',
	FORGOT_PASSWORD: 'quen-mat-khau',
	PROFILE: 'thong-tin-ca-nhan',
	USER: 'user',
	ADMIN: 'admin',
	PRODUCT: 'san-pham',
	CART: 'gio-hang',
	ORDER: 'don-hang',
	WARRANTY: 'bao-hanh',
	CONFIRM_ACCOUNT: 'xac-nhan-tai-khoan'
}

export const STORAGE_KEY = {
	LOCAL_USER: 'beep',
	THEME: 'theme',
	SECTIONTHEME: 'sectionTheme'
}

export enum STATUS_CODE {
	INVALID_METHOD = 405,
	CONFLICT = 409,
	CREATED = 201,
	OK = 200,
	FAILED = 400,
	INTERNAL = 500,
	MISSING_TOKEN = 403,
	AUTH_FAILED = 401
}

export enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE'
}

export const RESPONSE_CODE = {
	FAILED: 400,
	AUTH_FAILED: 401,
	CREATED: 201,
	OK: 200,
	NOT_FOUND: 404,
	INTERNAL: 500,
	EXIST: 409
}

export const STORAGE = {
	LOCAL: 'local',
	SESSION: 'session'
}

export enum PAYMENT_STATUS {
	NOT_YET = 'Chưa thanh toán',
	DONE = 'Đã thanh toán'
}

export enum PAYMENT_METHOD {
	COD = 'Thanh toán khi nhận hàng',
	ONLINE = 'Online (Banking, Ví điện tử)'
}

export const PaymentMethodOptions = [
	{
		label: PAYMENT_METHOD.ONLINE,
		value: PAYMENT_METHOD.ONLINE
	},
	{
		label: PAYMENT_METHOD.COD,
		value: PAYMENT_METHOD.COD
	}
]

export const ORDER_STATUS = {
	WAITING_FOR_CONFIRM: 'Chờ xác nhận',
	CONFIRMED: 'Đã xác nhận',
	SHIPPING: 'Đang vận chuyển',
	CANCELED: 'Đã huỷ',
	DONE: 'Đã hoàn thành'
}

export const OrderStatusOptions = [
	{
		label: ORDER_STATUS.WAITING_FOR_CONFIRM,
		value: ORDER_STATUS.WAITING_FOR_CONFIRM
	},
	{
		label: ORDER_STATUS.CONFIRMED,
		value: ORDER_STATUS.CONFIRMED
	},
	{
		label: ORDER_STATUS.SHIPPING,
		value: ORDER_STATUS.SHIPPING
	},
	{
		label: ORDER_STATUS.CANCELED,
		value: ORDER_STATUS.CANCELED
	},
	{
		label: ORDER_STATUS.DONE,
		value: ORDER_STATUS.DONE
	}
]

export const VNP_HASHSECRET = process.env.NEXT_PUBLIC_VNP_HASHSECRET as string
export const VNP_TMNCODE = process.env.NEXT_PUBLIC_VNP_TMNCODE as string
export const BACKEND_SEVER = process.env.NEXT_PUBLIC_BACKEND_SEVER as string

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
export const AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN as string
export const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID as string
export const STORAGE_BUCKET = process.env.NEXT_PUBLIC_STORAGE_BUCKET as string
export const MESSAGING_SENDER_ID = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string
export const APP_ID = process.env.NEXT_PUBLIC_APP_ID as string
export const MEASURMENT_ID = process.env.NEXT_PUBLIC_MEASURMENT_ID as string

export const SESSION_SERVICE = process.env.NEXT_PUBLIC_SESSION_SERVICE as string
export const SIMILAR_SERVICE = process.env.NEXT_PUBLIC_SIMILAR_SERVICE as string
