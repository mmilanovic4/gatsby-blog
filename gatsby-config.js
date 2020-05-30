const path = require('path');

module.exports = {
	siteMetadata: {
		siteUrl: 'http://localhost:9000',
		title: 'Gatsby Blog',
		author: 'John Doe',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
