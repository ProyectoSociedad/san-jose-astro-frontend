import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const PersonInfoIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
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
			d="M5 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0M2 14v6H0V8a3 3 0 0 1 5.106-2.137L7.48 8.106l2.313-2.313 1.414 1.414-3.687 3.687L6 9.46V20H4v-6zm1-7a1 1 0 0 0-1 1v4h2V8a1 1 0 0 0-1-1m13-4H7V1h10a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3.424l2.823 6h-2.21l-2.824-6H7v-2h9z"
		/>
	</svg>
)
