import { useState, useEffect } from 'react'

const useRecaptcha = (actionName: string): string | null => {
	const [token, setToken] = useState<string | null>(null)

	useEffect(() => {
		const getToken = async () => {
			if (window.grecaptcha) {
				window.grecaptcha.ready(async () => {
					const token = await window.grecaptcha.execute(
						'6LchufsnAAAAAKgEzDQWSH1nLyG_1ttI-7tDNvl8',
						{
							action: actionName
						}
					)
					setToken(token)
				})
			} else {
				console.error('grecaptcha not loaded')
			}
		}

		getToken()

		// Optional: Refresh token every 2 minutes if needed
		const intervalId = setInterval(getToken, 120000) // 2 minutes

		return () => clearInterval(intervalId)
	}, [actionName])

	return token
}

export default useRecaptcha
