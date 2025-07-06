import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	theme: {
		defaultTheme: 'dark',
		themes: {
			dark:{
				colors: {
					primary: '#00BCD4',
					secondary: '#03DAC6',
				},
			},
		},
	},
})
