import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { actions, store } = useContext(Context)
	return (
		<nav className="navbar navbar-light" style={{ backgroundColor: "#FFF5E1" }}>
			<Link to="/">
				<img src="https://cdn-icons-png.freepik.com/256/2010/2010147.png?ga=GA1.1.625650846.1737131641&semt=ais_hybrid" className="navbar-brand mb-0 img-fluid ms-5 rotate-img" style={{ width: '80px', height: 'auto' }} />
			</Link>
			<div>
				<div className="dropdown">
					<button className="dropdown-toggle me-5 p-3" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "white", borderRadius: "50px 0% 0% 50px", border: "5px solid #B2FFFF", fontSize: "20px", color: "#800080" }}><i><b>Favorites</b> </i>
						<span className="text-white ps-1 pe-1" style={{ borderRadius: "20px", fontSize: "17px", backgroundColor: "#B2FFFF"}}><b>{store.favorites.length}</b></span>
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
