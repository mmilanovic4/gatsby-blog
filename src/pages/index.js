import React from 'react';
import MainWrapper from '../components/MainWrapper';
import SEO from '../components/SEO';

export default () => {
	return (
		<MainWrapper>
			<SEO title="Home" />
			<h2>Home</h2>
			<p>This is my home page.</p>
		</MainWrapper>
	);
};
