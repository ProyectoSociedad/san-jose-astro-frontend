import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const LocationIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill={fill}
		viewBox="0 0 18 22"
		{...props}
	>
		<path
			fill={fill}
			d="m9 18.9 4.95-4.95a7 7 0 1 0-9.9 0zm0 2.828-6.364-6.364a9 9 0 1 1 12.728 0zM9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
		/>
	</svg>
)
