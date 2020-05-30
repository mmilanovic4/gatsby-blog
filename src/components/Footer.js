import React from 'react';
import { Link } from 'gatsby';

export default ({ author, socialNetworks }) => {
	return (
		<footer>
			<div className="social-networks">
				{socialNetworks &&
					socialNetworks.map((socialNetwork) => {
						const { network, url, icon } = socialNetwork;
						console.log(icon);
						return (
							<a href={url} key={network} target="_blank" rel="noreferrer">
								<img src={icon} alt={network} />
							</a>
						);
					})}
				<Link to="/rss.xml">
					<img src="/icons/rss.svg" alt="RSS feed" />
				</Link>
			</div>
			<p>
				&copy; {author}, {new Date().getFullYear()}.
			</p>
		</footer>
	);
};
