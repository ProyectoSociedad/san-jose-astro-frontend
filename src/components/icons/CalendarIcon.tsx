interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const CalendarIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill={fill}
		{...props}
		viewBox="0 0 28 29"
	>
		<path
			fill={fill}
			d="M10.5 1.666v2.333h7V1.666h2.333v2.333H24.5c.644 0 1.167.523 1.167 1.167v18.667c0 .644-.523 1.166-1.167 1.166h-21a1.167 1.167 0 0 1-1.167-1.166V5.166c0-.644.523-1.167 1.167-1.167h4.667V1.666H10.5Zm12.833 11.667H4.667v9.333h18.666v-9.333Zm-15.166-7h-3.5v4.666h18.666V6.333h-3.5v2.333H17.5V6.333h-7v2.333H8.167V6.333Z"
		/>
	</svg>
)
