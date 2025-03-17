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
		<html lang='en' suppressHydrationWarning className='scroll-smooth duration-500'>
			<body className={`${roboto.className}  antialiased container mx-auto`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className='min-h-dvh scroll-smooth pt-16'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
