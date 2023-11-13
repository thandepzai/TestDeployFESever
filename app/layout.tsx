import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { AppLayout } from '@/src/layout/AppLayout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
	metadataBase: new URL('https://acme.com')
}
interface RootLayout {
	children: ReactNode
}

const RootLayout: React.FC<RootLayout> = ({ children }) => {
	return (
		<html lang="en">
			<body className={`${inter.className} px-5 xl:px-16`}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	)
}

export default RootLayout
