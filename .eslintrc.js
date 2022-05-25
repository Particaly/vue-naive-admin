module.exports = {
	root: true,
	extends: ['plugin:vue/vue3-recommended'],
	rules: {
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
		indent: ['off', 'tab'],
		'no-trailing-spaces': 0,
		'vue/valid-template-root': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['index', '401', '404'],
			},
		],
	},
}
