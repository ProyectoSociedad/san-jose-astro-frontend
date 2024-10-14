import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const MedalCircleStartIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} fill={fill} viewBox="0 0 16 21" {...props}>
		<path
			fill={fill}
			d="M8 5.001a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 1.5 1.322 2.68 2.958.43-2.14 2.085.505 2.946L8 15.25l-2.645 1.39.505-2.945-2.14-2.086 2.958-.43zm6-8.5v3l-1.363 1.138A9.9 9.9 0 0 0 9 3.05L9 0zM7 0v3.05a9.9 9.9 0 0 0-3.636 1.088L2 3.001v-3z"
		/>
	</svg>
)
