import { defineConfig, envField } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import { loadEnv } from 'vite'
const { SITE } = loadEnv(process.env.NODE_ENV, process.cwd(), '')
// https://astro.build/config
export default defineConfig({
	site: SITE,
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
			SITE: envField.string({ context: 'client', access: 'public' }),
			API_INFORMATION: envField.string({ context: 'client', access: 'public' }),
			PUBLIC_RECAPTCHA_SITE_KEY: envField.string({
				context: 'client',
				access: 'public'
			})
		}
	}
})
