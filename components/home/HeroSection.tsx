import heroImage from '@/public/images/hero.webp'
import { gummy } from '@/styles/fonts'
import CustomButton from '../shared/CustomButton'
import { Plus, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card'
import { Avatar, AvatarImage } from '../ui/avatar'
import Dots from '../shared/Dots'

const HeroSection = () => {
	return (
		<section className=' relative h-auto min-h-screen w-full flex flex-col items-center '>
			{/* Text */}
			<div className='flex flex-col items-center justify-center gap-8 lg:gap-16 py-16 min-h-1/2 w-2/3'>
				<h1 className={`text-center ${gummy.className}`}>
					Make your dream <br />
					business goal come true
				</h1>
				<p className='text-center'>
					When you need us for improve your business,
					<br />
					then come with us to help your business have reach it, you just sit
					and feel that go
				</p>
				<Link href={'/projects/start'}>
					<CustomButton
						Size={'lg'}
						Title={'start project'}
						icon={Plus}
						type={'button'}
					/>
				</Link>
			</div>

			{/* Hero Image */}
			<div className='relative  h-1/2 w-2/3 '>
				<Image
					src={heroImage}
					alt={'hero image'}
					className='rounded-4xl object-cover'
					priority
				/>

				{/* Mini Card Right */}
				<div className='absolute bottom-8 -right-64 size-72 z-40'>
					<Card>
						<CardHeader>
							<CardTitle>
								<div className='flex items-center justify-between'>
									{/* Image */}
									<div className='size-16 relative '>
										<Image
											src={'/images/avatar.webp'}
											alt={'avatar'}
											className='rounded-full object-cover object-top'
											fill
										/>
									</div>

									{/* name & title */}
									<div className='flex flex-col gap-2'>
										<p className='capitalize font-semibold'>ahmed mohamed</p>
										<p className='capitalize font-thin'>fullstack developer</p>
									</div>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								This team is really the bst in its field, I don't regret working
								with them and will come back again . thanks
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Mini Card Left */}
				<div className='absolute top-8 -left-32 w-fit z-40'>
					<Card>
						<CardHeader>
							<div className='flex items-center justify-center gap-2'>
								<Star color='gold' fill='gold' />
								<p className='uppercase  font-thin'>great project</p>
							</div>
						</CardHeader>
						<CardContent>
							<h5>800+ Done</h5>
						</CardContent>
					</Card>
				</div>

			{/* Dots */}
			<div className='absolute left-1/12 -top-1/12 rotate-90 -skew-3 -z-50'>
				<Dots color={'bg-primary'} dotsNumber={6} />
			</div>
			<div className='absolute left-2/12 -bottom-1/12 rotate-90 skew-3 -z-50 '>
				<Dots color={'bg-destructive'} dotsNumber={6} />
			</div>
			</div>

			{/* Circles */}
			<div className='rounded-full size-8 bg-chart-5 absolute lg:bottom-1/12 bottom-2 lg:left-24 left-2 z-20' />
			<div className='rounded-full size-8 bg-chart-2 absolute  lg:top-1/12 top-2 lg:left-44 left-1 z-20' />
			<div className='rounded-full size-8 bg-chart-1 absolute  lg:bottom-4/12 bottom-2 lg:right-44 right-4 z-20' />
			<div className='rounded-full size-8 bg-chart-5 absolute  lg:top-8 top-4 lg:right-24 right-6 z-20' />
			{/* Circles */}
		</section>
	)
}

export default HeroSection
