module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: () => ({
				mac: "url('/images/mac.webp')"
			})
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
