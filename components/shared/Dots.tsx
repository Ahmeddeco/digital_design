import React from 'react'

type DotsProps = {
	color: string
	dotsNumber: number
}

const Dots = ({ color, dotsNumber }: DotsProps) => {
	const totalDots: number = dotsNumber * 4
	const dotsArray = Array.from({ length: totalDots })
	console.log('dotsArray', dotsArray)
	const Color = color

	return (
		<>
			<div className={` grid grid-cols-4 gap-4 h-auto w-auto`}>
				{dotsArray.map((_, index) => (
					<div key={index} className={`size-2 ${Color} rounded-full `} />
				))}
			</div>
		</>
	)
}

export default Dots
