import { LucideIcon } from 'lucide-react'
import { Button } from '../ui/button'
import React from 'react'
import Link from 'next/link'

type CustomButtonProps = {
	Variant?:
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link'
		| 'default'
	Size: 'lg' | 'default' | 'sm' | 'icon'
	Title: string
	className?: string
	icon?: LucideIcon
	type: 'button' | 'submit' | 'reset'
}

const CustomButton = ({
	Size,
	Title,
	Variant,
	className,
	icon,
	type,
}: CustomButtonProps) => {
	return (
		<Button
			variant={Variant}
			size={Size}
			className={`${className} rounded-full flex items-center justify-center gap-2 `}
			type={type}
		>
			{Title}
			{icon && React.createElement(icon)}
		</Button>
	)
}

export default CustomButton
