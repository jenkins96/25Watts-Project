import React, { Fragment } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import logo from "../../img/top-logo.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="bg container-fluid">
		<nav className="row">
			<div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-start">
				<a>
					<object id="logo" type="image/svg+xml" data={logo}></object>
				</a>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-end">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Products</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
		<h1>Home</h1>
	</div>
);

/*

<nav classNameName="row">
			<div classNameName="col-xl-6 col-lg-6 col-md-6">
				<a>
					<img src="../../img/top.logo.png" alt="MM" />
				</a>
			</div>
			<div classNameName="col-xl-6 col-lg-6 col-md-6">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Products</li>
					<li>Services</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>

*/
