import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const MetodologiaPracticaIcon = ({
	size = '1em',
	fill = 'currentColor',
	...props
}: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill={fill}
		{...props}
		viewBox="0 0 26 34"
	>
		<path
			fill={fill}
			d="M9.79 25.5h1.627v-7.916h3.167V25.5h1.625c.21-1.902 1.18-3.473 2.756-5.189.178-.193 1.317-1.371 1.452-1.54a9.446 9.446 0 0 0 2.083-5.937 9.5 9.5 0 1 0-19 0c0 2.191.74 4.262 2.082 5.935.135.168 1.276 1.35 1.451 1.54 1.578 1.718 2.549 3.289 2.758 5.191Zm.044 3.167v1.583h6.333v-1.583H9.833ZM3.11 20.749a12.614 12.614 0 0 1-2.778-7.915C.333 5.838 6.005.167 13 .167c6.996 0 12.667 5.671 12.667 12.667 0 2.996-1.04 5.75-2.78 7.919-.982 1.224-3.553 3.164-3.553 5.539v3.958a3.167 3.167 0 0 1-3.167 3.167H9.833a3.167 3.167 0 0 1-3.166-3.167v-3.958c0-2.375-2.574-4.317-3.556-5.543Z"
		/>
	</svg>
)
