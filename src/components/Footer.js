import React from 'react';

export default ({ author }) => {
	return (
		<footer>
			<p>
				&copy; {author}, {new Date().getFullYear()}.
			</p>
		</footer>
	);
};
