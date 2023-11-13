import moment from 'moment'
import { useEffect } from 'react'
import * as Yup from 'yup'

export const REGEX = {
	CODE: /^[a-z0-9A-Z.đĐ_-]+$/,
	PHONE: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
	EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
	IMAGE_URL: /\.(jpeg|jpg|gif|png)$/,
	URL: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/,
	YOUTUBE_URL:
		/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)$/,
	PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
}

// Yup.addMethod(
// 	Yup.string,
// 	'code',
// 	function (
// 		errorMessage = "Chỉ được phép nhập ký tự số, chữ không dấu, các ký tự '-' '_' '.' và không có ký tự đặc biệt"
// 	) {
// 		return this.matches(REGEX.CODE, {
// 			message: errorMessage,
// 			excludeEmptyString: true
// 		})
// 	}
// )

// Yup.addMethod(
// 	Yup.string,
// 	'password',
// 	function (
// 		errorMessage = 'Mật khẩu cần ít nhất 8 ký tự, ký tự đầu viết hoa, 1 chữ số, 1 ký tự đặc biệt và không có khoảng cách'
// 	) {
// 		return this.test('PASSWORD', function (value) {
// 			const checkValidate = /^[A-Z]/.test(value?.[0]) && REGEX.PASSWORD.test(value)

// 			return checkValidate
// 				? true
// 				: this.createError({
// 						message: errorMessage,
// 						excludeEmptyString: true
// 				  })
// 		})
// 	}
// )

// Yup.addMethod(Yup.string, 'phone', function (errorMessage = 'Số điện thoại sai định dạng') {
// 	return this.matches(REGEX.PHONE, {
// 		message: errorMessage,
// 		excludeEmptyString: true
// 	})
// })

// Yup.addMethod(Yup.string, 'imageUrl', function (errorMessage = 'Đường dẫn ko đúng định dạng') {
// 	return this.matches(REGEX.IMAGE_URL, {
// 		message: errorMessage,
// 		excludeEmptyString: true
// 	})
// })

// Yup.addMethod(Yup.string, 'isUrl', function (errorMessage = 'Đường dẫn ko đúng định dạng') {
// 	return this.matches(REGEX.URL, {
// 		message: errorMessage,
// 		excludeEmptyString: true
// 	})
// })

// Yup.addMethod(Yup.string, 'videoUrl', function (errorMessage = 'Đường dẫn video ko đúng định dạng') {
// 	const finalRegex = new RegExp(`${new RegExp(REGEX.YOUTUBE_URL).source}|${new RegExp(REGEX.VIDEO_URL).source}`)
// 	return this.matches(finalRegex, {
// 		message: errorMessage,
// 		excludeEmptyString: true
// 	})
// })

// Yup.addMethod(Yup.date, 'mustBefore', function (dependentPath) {
// 	return this.test('MUST_BEFORE', function (value) {
// 		const dependentValue = this?.parent?.[dependentPath]

// 		if (isValid(value) && isValid(dependentValue)) {
// 			const check = isBefore(value, dependentValue)
// 			return check
// 				? true
// 				: this.createError({
// 						message: `Phải nhỏ hơn ngày ${moment(dependentValue).format('L')}`
// 				  })
// 		}

// 		return true
// 	})
// })

// Yup.addMethod(Yup.date, 'mustAfter', function (dependentPath) {
// 	return this.test('MUST_AFTER', function (value) {
// 		const dependentValue = this?.parent?.[dependentPath]

// 		if (isValid(value) && isValid(dependentValue)) {
// 			const check = isAfter(value, dependentValue)

// 			return check
// 				? true
// 				: this.createError({
// 						message: `Phải lớn hơn ngày ${moment(dependentValue).format('L')}`
// 				  })
// 			// return compareAsc(
// 			// 	parse(format(value, 'dd/MM/yyyy'), 'dd/MM/yyyy', new Date()),
// 			// 	parse(format(dependentValue, 'dd/MM/yyyy'), 'dd/MM/yyyy', new Date()) //
// 			// ) <= 0
// 			// 	? this.createError({
// 			// 			message: `${t('core:validation.mustAfter')} ${moment(dependentValue).format('L')}`
// 			// 	  })
// 			// 	: true
// 		}

// 		return true
// 	})
// })

export const useYupDefaultMessage = () => {
	Yup.setLocale({
		mixed: {
			required: 'Vui lòng điền thông tin vào trường này!'
		},
		string: {
			required: 'Vui lòng điền thông tin vào trường này!',
			email: 'Email không hợp lệ!',
			max: ({ max }) => `Tối đa ${max} ký tự!`,
			min: ({ min }) => `Tối đa ${min} ký tự!`
		},
		array: {
			min: 'Vui lòng điền thông tin vào trường này!'
		},
		number: {
			required: 'Vui lòng điền thông tin vào trường này!',
			max: ({ max }) => `Tối đa: ${max} !`,
			min: ({ min }) => `Tối đa: ${min} !`,
			moreThan: ({ more }) => `Giá trị phải lớn hơn ${more} !`,
			integer: () => `Giá trị phải là số tự nhiên!`
		},
		date: {
			typeError: 'Giá trị không hợp lệ!'
		}
	})
}

export default Yup
