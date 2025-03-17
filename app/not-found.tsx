import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col gap-8 items-center justify-center min-h-dvh'>
			<h1>Not Found</h1>
			<p>Could not find requested resource</p>
			<Button >
				<Link href='/'>Return Home</Link>
			</Button>
		</div>
	)
}
