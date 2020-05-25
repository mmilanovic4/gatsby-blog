import React from 'react';
import { graphql, Link } from 'gatsby';
import MainWrapper from '../components/MainWrapper';

export default (props) => {
	console.log(props);
	const { data } = props;
	const {
		markdownRemark: {
			frontmatter: { title, date },
			html,
			timeToRead
		}
	} = data;

	return (
		<MainWrapper>
			<h2>{title}</h2>
			<div className="post">
				<div className="post-metadata">
					<span>{date}</span>
					<span>{timeToRead} min read</span>
				</div>
				<div
					className="post-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
			<Link to="/">Back to home</Link>
		</MainWrapper>
	);
};

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "DD.MM.YYYY")
			}
			html
			timeToRead
		}
	}
`;
