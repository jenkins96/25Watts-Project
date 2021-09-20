import React from "react";
///workspace/25Watts-Project/src/img/top-logo.svg

//create your first component
const Header = () => {
	return (
		<nav>
			<div>
				<a>
					<img src="../../img/top.logo.svg" alt="MM" />
				</a>
			</div>
			<div>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Products</li>
					<li>Services</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
