import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const CloseIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill={fill}
		{...props}
		viewBox="0 0 18 18"
	>
		<path
			fill={fill}
			d="m9 7.94 3.712-3.712 1.06 1.06-3.712 3.713 3.713 3.712-1.06 1.06L9 10.061l-3.713 3.712-1.06-1.06L7.939 9 4.227 5.288l1.06-1.06z"
		/>
	</svg>
)
