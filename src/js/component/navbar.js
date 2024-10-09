import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHNJI8TwkF46elZovdH7hO65b-qTTG1pB7A&s" className="navbar-brand mb-0 img-fluid" style={{ width: '70px', height: 'auto' }} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary fs-4 p-2">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
