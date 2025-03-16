import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '@/public/images/logo.webp'

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className='size-8 relative'>
				<Image src={LogoImage} alt={'Logo'} fill />
			</div>
		</Link>
	)
}

export default Logo
