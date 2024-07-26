// Extiende la interfaz global `Window` para incluir `grecaptcha`.
declare global {
	interface Window {
		grecaptcha: {
			ready: (callback: () => void) => void
			execute: (siteKey: string, options: { action: string }) => Promise<string>
		}
	}
}

// Este archivo no exportará nada. Solo modifica el tipo global.
export {}
