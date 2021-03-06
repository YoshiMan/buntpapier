const webpack = require('webpack')

module.exports = {
	title: 'buntpapier',
	description: 'yet another component library',
	dest: 'dist',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Installation', link: '/installation' },
			{ text: 'Components', link: '/components/' },
			{ text: 'Directives', link: '/directives/' },
			{ text: 'Stylus Mixins', link: '/mixins' },
			{ text: 'Validation', link: '/validation' },
			{ text: 'Github', link: 'https://github.com/rashfael/buntpapier' },
		],
		sidebar: {
			'/components/': [
				'button',
				'icon-button',
				'link-button',
				'input',
				'select',
				'checkbox',
				'radio',
				'switch',
				'tabs',
				'progress-circular'
			],
			'/directives/': [
				'scrollbar',
				'tooltip',
				'resize-observer'
			]
		}
	},
	configureWebpack: {
		plugins: [
			new webpack.EnvironmentPlugin(['BUILD'])
		]
	},
	chainWebpack: (config, isServer) => {
		config.module
		.rule('js')
			.use('babel-loader')
			.tap(options => Object.assign(options, {
				plugins: ["@babel/proposal-optional-chaining"]
			}))
	},
	stylus: {
		preferPathResolver: 'webpack',
		use: [require('../../stylus')()]
	}
}
