import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const FormacionIntegralIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill={fill}
		{...props}
		viewBox="0 0 38 32"
	>
		<path
			fill={fill}
			d="M6.333 14.945 0 11.25 19 .167 38 11.25V24.71h-3.167V13.098l-3.166 1.847v10.573l-.353.436A15.806 15.806 0 0 1 19 31.834a15.806 15.806 0 0 1-12.314-5.88l-.353-.436V14.945ZM9.5 16.792v7.587a12.633 12.633 0 0 0 9.5 4.288c3.782 0 7.177-1.656 9.5-4.288v-7.587L19 22.334l-9.5-5.542ZM6.285 11.25 19 18.668l12.715-7.418L19 3.833 6.285 11.25Z"
		/>
	</svg>
)
