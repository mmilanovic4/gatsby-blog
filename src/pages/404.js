import React from 'react';
import { Link } from 'gatsby';
import MainWrapper from '../components/MainWrapper';

export default () => {
	return (
		<MainWrapper>
			<h2>404 - page not found</h2>
			<p>
				Go to <Link to="/">home page</Link>.
			</p>
		</MainWrapper>
	);
};
