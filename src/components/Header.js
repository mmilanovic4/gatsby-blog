import React from 'react';
import { Link } from 'gatsby';

export default ({ title, subtitle }) => {
	return (
		<>
			<header>
				<h1>
					<Link to="/">{title}</Link>
				</h1>
				<p>{subtitle}</p>
			</header>
			<nav>
				<ul>
					<li>
						<Link to="/" activeClassName="active">
							Home
						</Link>
					</li>
					<li>
						<Link to="/blog" activeClassName="active">
							Blog
						</Link>
					</li>
					<li>
						<Link to="/contact" activeClassName="active">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
