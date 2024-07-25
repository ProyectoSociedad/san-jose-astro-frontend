import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const BarsIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill={fill}
		{...props}
		viewBox="0 0 14 13"
	>
		<path
			fill={fill}
			d="M.143.143h13.714v1.524H.143zm4.572 5.333h9.142V7H4.715zM.143 10.81h13.714v1.523H.143z"
		/>
	</svg>
)
