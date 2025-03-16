import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { Separator } from '@/components/ui/separator'
import NavLink from './NavLink'

const MobileNav = () => {
	return (
		<div className='lg:hidden block'>
			<Sheet>
				<SheetTrigger asChild>
					<Button size={'icon'} variant={'ghost'}>
						<Menu className='size-8' />
					</Button>
				</SheetTrigger>
				<SheetClose asChild >
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Navigations</SheetTitle>
						</SheetHeader>
						<Separator />
						<nav className='flex flex-col gap-8 p-8'>
							<NavLink />
						</nav>
					</SheetContent>
				</SheetClose>
			</Sheet>
		</div>
	)
}

export default MobileNav
