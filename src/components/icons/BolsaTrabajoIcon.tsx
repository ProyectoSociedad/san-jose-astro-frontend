import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const BolsaTrabajoIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill={fill}
		{...props}
		viewBox="0 0 32 33"
	>
		<path
			fill={fill}
			d="M8.083 6.916v-4.75c0-.874.71-1.583 1.583-1.583h12.667c.875 0 1.584.709 1.584 1.583v4.75h6.333c.874 0 1.583.71 1.583 1.584v22.166c0 .875-.709 1.584-1.583 1.584H1.75a1.583 1.583 0 0 1-1.583-1.584V8.5c0-.875.708-1.584 1.583-1.584h6.333Zm-4.75 17.417v4.75h25.334v-4.75H3.332Zm0-3.167h25.334V10.083H3.332v11.083ZM11.25 3.75v3.166h9.5V3.75h-9.5Zm3.166 12.666h3.167v3.167h-3.166v-3.167Z"
		/>
	</svg>
)
