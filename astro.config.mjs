import { defineConfig, envField } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	site: 'https://cursoagenteinmobiliarioperu.pe',
	integrations: [
		// partytown({
		// 	// Adds dataLayer.push as a forwarding-event.
		// 	config: {
		// 		forward: ['dataLayer.push']
		// 	}
		// })

		tailwind(),
		react()
	],
	env: {
		schema: {
			API_INFORMATION: envField.string({ context: 'client', access: 'public' }),
			PUBLIC_RECAPTCHA_SITE_KEY: envField.string({
				context: 'client',
				access: 'public'
			})
		}
	}
})
