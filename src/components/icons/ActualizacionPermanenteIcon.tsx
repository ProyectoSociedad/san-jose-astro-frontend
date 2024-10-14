import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const ActualizacionPermanenteIcon = ({
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
		viewBox="0 0 32 32"
	>
		<path
			fill={fill}
			d="M16 3.334A12.654 12.654 0 0 0 5.525 8.875h4.141v3.167h-9.5v-9.5h3.167v3.957C6.221 2.655 10.82.167 16 .167 24.744.167 31.833 7.256 31.833 16h-3.166c0-6.995-5.672-12.666-12.667-12.666ZM3.333 16c0 6.996 5.671 12.667 12.667 12.667 4.352 0 8.193-2.195 10.474-5.542h-4.14V19.96h9.5v9.5h-3.168V25.5C25.78 29.345 21.181 31.834 16 31.834 7.255 31.834.167 24.744.167 16h3.166Z"
		/>
	</svg>
)
