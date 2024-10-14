import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const ClipboardListIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill={fill}
		viewBox="0 0 18 20"
		{...props}
	>
		<path
			fill={fill}
			d="M14 0v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H.993A.993.993 0 0 1 0 19.007V2.993C0 2.445.445 2 .993 2H4V0zM4 4H2v14h14V4h-2v2H4zm2 10v2H4v-2zm0-3v2H4v-2zm0-3v2H4V8zm6-6H6v2h6z"
		/>
	</svg>
)
