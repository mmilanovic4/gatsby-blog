import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './style.scss';
import { Helmet } from 'react-helmet';

export default (props) => {
	const {
		site: { siteMetadata }
	} = useStaticQuery(SITE_METADATA);
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

const SITE_METADATA = graphql`
	query {
		site {
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
			}
		}
	}
`;
