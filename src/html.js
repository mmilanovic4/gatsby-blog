import React from 'react';

export default (props) => {
	const {
		htmlAttributes,
		headComponents,
		preBodyComponents,
		body,
		postBodyComponents
	} = props;
	return (
		<html {...htmlAttributes}>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{headComponents}
			</head>
			<body>
				{preBodyComponents}
				<div
					key="body"
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: body }}
				></div>
				{postBodyComponents}
			</body>
		</html>
	);
};
