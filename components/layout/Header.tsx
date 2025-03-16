import Link from 'next/link'
import ThemeSwitcher from '../theme/ThemeSwitcher'
import Logo from './Logo'
import { NavLinks } from '@/constants/navLinks'
import { gluten } from '@/styles/fonts'
import NavLink from './NavLink'
import MobileNav from './MobileNav'

const Header = () => {
	return (
		<header className='h-16 fixed z-50 right-0 top-0 left-0 bg-background/95  '>
			<div className='container mx-auto flex items-center justify-between border-b py-2'>
				{/* logo */}
				<Logo />
				{/* Desktop Nav */}
				<nav className='hidden lg:flex items-center justify-center gap-8'>
					<NavLink />
				</nav>
				{/* Mobile Nav */}
				<div className='flex items-center justify-center gap-4'>
					<ThemeSwitcher />
					<div>
						<MobileNav />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
