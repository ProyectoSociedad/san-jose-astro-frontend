// import { useState, useEffect } from 'react'

// const useRecaptcha = (actionName: string): string | null => {
// 	const [token, setToken] = useState<string | null>(null)

// 	useEffect(() => {
// 		const getToken = async () => {
// 			if (window.grecaptcha) {
// 				window.grecaptcha.ready(async () => {
// 					const token = await window.grecaptcha.execute(
// 						'6LchufsnAAAAAKgEzDQWSH1nLyG_1ttI-7tDNvl8',
// 						{
// 							action: actionName
// 						}
// 					)
// 					setToken(token)
// 				})
// 			} else {
// 				console.error('grecaptcha not loaded')
// 			}
// 		}

// 		getToken()

// 		// Optional: Refresh token every 2 minutes if needed
// 		const intervalId = setInterval(getToken, 120000) // 2 minutes

// 		return () => clearInterval(intervalId)
// 	}, [actionName])

// 	return token
// }

// export default useRecaptcha
import { useState, useCallback } from 'react'

// Definir el tipo de la función que será devuelta por el gancho
type UseRecaptchaReturnType = {
	loadAndExecuteRecaptcha: (actionName: string) => Promise<string>
	token: string | null
}

const useRecaptcha = (): UseRecaptchaReturnType => {
	const [token, setToken] = useState<string | null>(null)

	const loadAndExecuteRecaptcha = useCallback(async (actionName: string): Promise<string> => {
		const addScript = () => {
			return new Promise<void>((resolve, reject) => {
				const script = document.createElement('script')
				script.src =
					'https://www.google.com/recaptcha/api.js?render=6LchufsnAAAAAKgEzDQWSH1nLyG_1ttI-7tDNvl8'
				script.async = true
				document.head.appendChild(script)
				script.onload = () => {
					console.log('Script reCAPTCHA cargado.')
					resolve()
				}
				script.onerror = () => reject(new Error('Error de carga del script'))
			})
		}

		// Cargar script si grecaptcha no está disponible
		if (!window.grecaptcha) {
			await addScript()
		}

		// Asegúrese de que grecaptcha está listo antes de ejecutar
		await new Promise<void>((resolve) => window.grecaptcha.ready(resolve))

		try {
			const newToken = await window.grecaptcha.execute('6LchufsnAAAAAKgEzDQWSH1nLyG_1ttI-7tDNvl8', {
				action: actionName
			})
			setToken(newToken)
			return newToken
		} catch (error) {
			throw new Error('Error al recuperar el token reCAPTCHA')
		}
	}, [])

	return { loadAndExecuteRecaptcha, token }
}

export default useRecaptcha
