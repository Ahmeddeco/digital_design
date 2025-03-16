import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { roboto } from '@/styles/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
	title: 'Digital | Marketing',
	description: 'Digital is a Fullstack and marketing agency. ',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${roboto.className}  antialiased scroll-smooth container mx-auto`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className='min-h-dvh bg-blue-700 mt-16 pt-8'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
