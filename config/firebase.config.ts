// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import {
	API_KEY,
	APP_ID,
	AUTH_DOMAIN,
	MEASURMENT_ID,
	MESSAGING_SENDER_ID,
	PROJECT_ID,
	STORAGE_BUCKET
} from '@/src/const/app-const'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
	measurementId: MEASURMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

if (app.name && typeof window !== 'undefined') {
	const analytics = getAnalytics(app)
}

const auth = getAuth(app)

export { auth }
