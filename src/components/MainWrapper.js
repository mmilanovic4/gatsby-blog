import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import './style.scss';

export default ({ children }) => {
	const {
		site: {
			siteMetadata: { title, author, description }
		}
	} = useStaticQuery(SITE_METADATA);

	return (
		<div className="container">
			<Header title={title} subtitle={description} />
			<main>
				<section>{children}</section>
			</main>
			<Footer author={author} />
		</div>
	);
};

const SITE_METADATA = graphql`
	query {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`;
