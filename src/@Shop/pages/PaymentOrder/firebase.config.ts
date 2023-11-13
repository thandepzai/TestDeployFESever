// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAjhz_hziY38R64n_P_4Sedxdc80TgGjng',
	authDomain: 'shopshoes-otp.firebaseapp.com',
	projectId: 'shopshoes-otp',
	storageBucket: 'shopshoes-otp.appspot.com',
	messagingSenderId: '35333464899',
	appId: '1:35333464899:web:7e7e46199e35779b0305f6',
	measurementId: 'G-0S1MC9BNHX'
}

// 2 sever cho 100 tin
const firebaseConfig2 = {
	apiKey: 'AIzaSyCj1MAsBhQ3qqGh0qU4kryoRcVqWAaHBDM',
	authDomain: 'shopshoesv-2.firebaseapp.com',
	projectId: 'shopshoesv-2',
	storageBucket: 'shopshoesv-2.appspot.com',
	messagingSenderId: '1058216855854',
	appId: '1:1058216855854:web:8ec95c0f38abac992e92bf',
	measurementId: 'G-2R2061G60M'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

if (app.name && typeof window !== 'undefined') {
	const analytics = getAnalytics(app)
}

const auth = getAuth(app)

export { auth }
