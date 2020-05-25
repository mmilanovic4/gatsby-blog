import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import './style.scss';

export const SITE_METADATA = graphql`
	query {
		site {
			siteMetadata {
				title
				author
			}
		}
	}
`;

export default ({ children }) => {
	const { site: { siteMetadata : { title, author } } } = useStaticQuery(SITE_METADATA);

	return (
		<div className="container">
			<Header title={title} />
			<main>
				<section>{children}</section>
			</main>
			<Footer author={author} />
		</div>
	);
};
