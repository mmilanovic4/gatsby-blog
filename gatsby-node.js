const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const postComponent = path.resolve(
		__dirname,
		'src',
		'templates',
		'blogTemplate.js'
	);

	const tagComponent = path.resolve(__dirname, 'src', 'templates', 'tags.js');

	const result = await graphql(ALL_MARKDOWN_REMARK);

	if (result.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}

	const {
		data: {
			posts: { edges },
			tags: { group }
		}
	} = result;

	edges.forEach(({ node }) => {
		const {
			frontmatter: { slug: path }
		} = node;

		createPage({
			path,
			component: postComponent,
			context: {
				slug: path
			}
		});
	});

	group.forEach((tag) => {
		const { fieldValue } = tag;

		createPage({
			path: `/tags/${fieldValue}`,
			component: tagComponent,
			context: {
				tag: fieldValue
			}
		});
	});
};

const ALL_MARKDOWN_REMARK = `
	query {
		posts: allMarkdownRemark {
			edges {
				node {
					frontmatter {
						slug
					}
				}
			}
		}
		tags: allMarkdownRemark {
			group(field: frontmatter___tags) {
				fieldValue
			}
		}
	}
`;

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === 'MarkdownRemark') {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: 'slug',
			node,
			value
		});
	}
};
