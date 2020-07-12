import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import './style.scss';

const siteMetadataQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				author
				description
				socialNetworks {
					network
					url
					icon
				}
			}
		}
	}
`;

export default ({ children }) => {
	const {
		site: {
			siteMetadata: { title, author, description, socialNetworks }
		}
	} = useStaticQuery(siteMetadataQuery);

	return (
		<div className="container">
			<Header title={title} subtitle={description} />
			<main>
				<section>{children}</section>
			</main>
			<Footer author={author} socialNetworks={socialNetworks} />
		</div>
	);
};
