import React from 'react';
import { graphql, Link } from 'gatsby';
import MainWrapper from '../components/MainWrapper';
import SEO from '../components/SEO';

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "DD.MM.YYYY")
				tags
			}
			html
			timeToRead
		}
	}
`;

export default (props) => {
	const { data } = props;
	const {
		markdownRemark: {
			frontmatter: { title, date, tags },
			html,
			timeToRead
		}
	} = data;

	return (
		<MainWrapper>
			<SEO title={title} />
			<h2>{title}</h2>
			<div className="post">
				<div className="post-metadata">
					<span>{date}</span>
					<span>{timeToRead} min read</span>
				</div>
				<div className="post-tags">
					{tags.map((tag) => (
						<a key={tag} href={`/tags/${tag}`}>
							#{tag}
						</a>
					))}
				</div>
				<div
					className="post-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
			<Link to="/">
				<small>Back to home</small>
			</Link>
		</MainWrapper>
	);
};
