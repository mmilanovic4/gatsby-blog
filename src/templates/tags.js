import React from 'react';
import { graphql, Link } from 'gatsby';
import MainWrapper from '../components/MainWrapper';
import SEO from '../components/SEO';

export const pageQuery = graphql`
	query($tag: String!) {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			edges {
				node {
					id
					frontmatter {
						title
						slug
						spoiler
						date(formatString: "DD.MM.YYYY")
					}
					timeToRead
				}
			}
		}
	}
`;

export default ({ data, pageContext }) => {
	const {
		allMarkdownRemark: { edges }
	} = data;

	const { tag } = pageContext;
	const posts = edges.map((edge) => edge.node);

	const renderPost = (post) => {
		const {
			id,
			frontmatter: { title, slug, spoiler, date },
			timeToRead
		} = post;

		return (
			<div className="post" key={id}>
				<h3>
					<Link to={slug}>{title}</Link>
				</h3>
				<div className="post-metadata">
					<span>{date}</span>
					<span>{timeToRead} min read</span>
				</div>
				<div className="post-spoiler">{spoiler}</div>
			</div>
		);
	};

	return (
		<MainWrapper>
			<SEO title={`Tagged with: ${tag}`} />
			<h2>Tagged with: {tag}</h2>
			{posts.length > 0 ? (
				<div className="post-container">{posts.map(renderPost)}</div>
			) : (
				<p>Currently, there are no posts available.</p>
			)}
		</MainWrapper>
	);
};
