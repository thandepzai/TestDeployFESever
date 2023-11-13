// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC3Kcvlos-_M7_-td1K3Z6vJB1R912bx9M',
	authDomain: 'authapp-8c4cc.firebaseapp.com',
	projectId: 'authapp-8c4cc',
	storageBucket: 'authapp-8c4cc.appspot.com',
	messagingSenderId: '934836424428',
	appId: '1:934836424428:web:7db9212d670410fbf21fc9',
	measurementId: 'G-6GPW2TX74Q'
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
