import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const CopyIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
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
			d="M18 6v12.993A1 1 0 0 1 17.007 20H.993A.993.993 0 0 1 0 19.008V.992C0 .455.449 0 1.002 0h10.995zm-2 1h-5V2H2v16h14zM5 5h3v2H5zm0 4h8v2H5zm0 4h8v2H5z"
		/>
	</svg>
)
