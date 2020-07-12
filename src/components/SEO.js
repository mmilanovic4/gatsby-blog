import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './style.scss';
import { Helmet } from 'react-helmet';

const siteMetadataQuery = graphql`
	query {
		site {
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
			}
		}
	}
`;

export default (props) => {
	const {
		site: { siteMetadata }
	} = useStaticQuery(siteMetadataQuery);
	const { defaultTitle, defaultDescription } = siteMetadata;
	const { title, description } = props;

	const seo = {
		title: title ? `${title} | ${defaultTitle}` : defaultTitle,
		description: description || defaultDescription
	};

	return (
		<Helmet title={seo.title}>
			<meta name="description" content={seo.description} />
		</Helmet>
	);
};
