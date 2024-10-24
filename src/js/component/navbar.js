import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { actions, store } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHNJI8TwkF46elZovdH7hO65b-qTTG1pB7A&s" className="navbar-brand mb-0 img-fluid ms-5" style={{ width: '70px', height: 'auto' }} />
			</Link>
			<div>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="bg-secondary ps-1 pe-1">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu">
						{store.favorites.length == 0 ?
							<li className="text-center">(empty)</li>
							:
							store.favorites.map((item) => (
								<div className="container-fluid d-flex justify-content-between align-items-center">
									<li className="ps-2" key={item}><a className="dropdown-item" href="#"></a> {item}
									</li>
									<span onClick={() => { actions.deleteFavorite(item) }}><i className="fas fa-trash pe-2"> </i></span>
								</div>
							))
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
