'use client'

import { NavLinks } from '@/constants/navLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = () => {
	const pathName = usePathname()
	console.log('pathName', pathName)

	return (
		<>
			{NavLinks.map(({ href, title }, i) => (
				<Link href={href} key={i} className={`capitalize `}>
					{title}
				</Link>
			))}
		</>
	)
}

export default NavLink
