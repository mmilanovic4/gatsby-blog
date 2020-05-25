const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const component = path.resolve(
		__dirname,
		'src',
		'templates',
		'blogTemplate.js'
	);

	const result = await graphql(ALL_MARKDOWN_REMARK);

	if (result.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}

	const {
		data: {
			allMarkdownRemark: { edges }
		}
	} = result;

	edges.forEach(({ node }) => {
		const {
			frontmatter: { slug: path }
		} = node;

		createPage({
			path,
			component,
			context: {
				slug: path
			}
		});
	});
};

const ALL_MARKDOWN_REMARK = `
	query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						slug
					}
				}
			}
		}
	}
`;
