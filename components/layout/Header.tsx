import Image from 'next/image'
import Logo from '../../public/images/logo.webp'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='h-16 fixed z-50 right-0 top-0 left-0 bg-red-500 '>
			<div className='container mx-auto bg-green-800 h-full flex items-center justify-between'>
				{/* logo */}
				<Link href={'/'}>
					<div className='size-12 relative'>
						<Image src={Logo} alt={'Logo'} fill />
					</div>
				</Link>
				<nav className='hidden lg:flex items-center justify-center gap-4'>
					<Link href={'/'}>home</Link>
					<Link href={'/'}>home</Link>
					<Link href={'/'}>home</Link>
					<Link href={'/'}>home</Link>
				</nav>
				<div className=''>Button</div>
			</div>
		</header>
	)
}

export default Header
