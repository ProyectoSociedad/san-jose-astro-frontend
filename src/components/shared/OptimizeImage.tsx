// OptimizeImage.tsx
import React from 'react'

interface OptimizeImageProps {
	srcMobile: string
	srcTablet: string
	srcDesktop: string
	alt: string
	width?: number | string
	height?: number | string
	stylesPicture?: string
	stylesImg?: string
	mediaTablet?: number
	mediaDesktop?: number
	lazy?: boolean
}

export const OptimizeImage: React.FC<OptimizeImageProps> = ({
	srcMobile,
	srcTablet,
	srcDesktop,
	alt,
	width = 'auto',
	height = 'auto',
	stylesPicture = '',
	stylesImg = '',
	mediaTablet = 768,
	mediaDesktop = 1280,
	lazy = true
}) => {
	return (
		<picture className={`block w-full ${stylesPicture}`}>
			<source srcSet={`/img${srcDesktop}`} media={`(min-width: ${mediaDesktop}px)`} />
			<source srcSet={`/img${srcTablet}`} media={`(min-width: ${mediaTablet}px)`} />
			<img
				decoding="async"
				loading={lazy ? 'lazy' : 'eager'}
				src={`/img${srcMobile}`}
				alt={alt}
				width={width}
				height={height}
				className={stylesImg}
			/>
		</picture>
	)
}
