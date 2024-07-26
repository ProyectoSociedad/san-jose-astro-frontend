// En el archivo globals.d.ts

// Extiende la interfaz Window para incluir dataLayer
declare global {
	interface Window {
		dataLayer: any[]
		gtag: (...args: any[]) => void
	}
}

export {}
