import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { actions, store } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHNJI8TwkF46elZovdH7hO65b-qTTG1pB7A&s" className="navbar-brand mb-0 img-fluid" style={{ width: '70px', height: 'auto' }} />
			</Link>
			<div>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end p-1">
						{store.favorites.map((item) => (
							<li key={item}><a className="dropdown-item" href="#"></a> {item}
								<span onClick={() => { actions.deleteFavorite(item) }}><i className="fas fa-trash float-end"> </i></span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
