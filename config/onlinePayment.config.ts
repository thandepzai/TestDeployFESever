import { VNP_HASHSECRET, VNP_TMNCODE } from '@/src/const/app-const'

const onlinePaymentConfig = {
	vnp_TmnCode: VNP_TMNCODE,
	vnp_HashSecret: VNP_HASHSECRET,
	vnp_Url: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
	vnp_Api: 'https://sandbox.vnpayment.vn/merchant_webapi/api/transaction'
}

export default onlinePaymentConfig
