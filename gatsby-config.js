const path = require('path');

module.exports = {
	siteMetadata: {
		siteUrl: 'http://localhost:9000',
		title: 'Gatsby Blog',
		author: 'John Doe',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		socialNetworks: [
			{
				network: 'Facebook',
				url: 'https://www.facebook.com',
				icon: '/icons/facebook.svg'
			},
			{
				network: 'Instagram',
				url: 'https://www.instagram.com',
				icon: '/icons/instagram.svg'
			},
			{
				network: 'Twitter',
				url: 'https://twitter.com',
				icon: '/icons/twitter.svg'
			},
			{
				network: 'YouTube',
				url: 'https://www.youtube.com',
				icon: '/icons/youtube.svg'
			}
		]
	},
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: path.resolve(__dirname, 'posts')
			}
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-feed'
	]
};
