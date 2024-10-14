import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const MaterialesDictadosIcon = ({
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
		viewBox="0 0 30 32"
	>
		<path
			fill={fill}
			d="M7.083 6.5V1.75c0-.874.709-1.583 1.583-1.583h19c.875 0 1.584.709 1.584 1.583v22.167c0 .874-.71 1.583-1.584 1.583h-4.75v4.749c0 .875-.712 1.585-1.594 1.585H2.344c-.88 0-1.594-.704-1.594-1.585L.754 8.085c0-.875.713-1.585 1.594-1.585h4.735ZM3.92 9.667l-.003 19H19.75v-19H3.92ZM10.25 6.5h12.666v15.834h3.167v-19H10.25V6.5Zm-3.167 7.917h9.5v3.167h-9.5v-3.167Zm0 6.333h9.5v3.167h-9.5V20.75Z"
		/>
	</svg>
)
