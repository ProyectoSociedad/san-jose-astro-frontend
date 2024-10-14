interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const ClockIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
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
			d="M14 26.167c-6.443 0-11.667-5.223-11.667-11.666C2.333 8.057 7.557 2.834 14 2.834s11.667 5.223 11.667 11.667c0 6.443-5.224 11.666-11.667 11.666Zm0-2.333a9.333 9.333 0 1 0 0-18.667 9.333 9.333 0 0 0 0 18.667Zm1.167-9.333h4.666v2.333h-7V8.667h2.334v5.834Z"
		/>
	</svg>
)
