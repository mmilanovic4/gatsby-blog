import React from 'react';
import { useStaticQuery, Link } from 'gatsby';
import MainWrapper from '../components/MainWrapper';
import SEO from '../components/SEO';

export default () => {
	const {
		allMarkdownRemark: { edges }
	} = useStaticQuery(ALL_MARKDOWN_REMARK);
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
			<SEO title="Blog" />
			<h2>Blog</h2>
			<p>Here you can find all posts on this blog.</p>
			{posts.length > 0 ? (
				<div className="post-container">{posts.map(renderPost)}</div>
			) : (
				<p>Currently, there are no posts available.</p>
			)}
		</MainWrapper>
	);
};

const ALL_MARKDOWN_REMARK = graphql`
	query {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
