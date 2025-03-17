import Dots from '@/components/shared/Dots'

export default function projects() {
	return (
		<div className='flex items-center justify-center h-screen'>
			{/* <p>hello from page</p> */}
			<div className="rotate-[33deg]">

			<Dots color={ ' bg-primary' } dotsNumber={ 6 }  />
			</div>
		</div>
	)
}
