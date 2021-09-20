import React, { Fragment } from "react";
import { Home } from "./views/home";
import { About } from "./views/about";
import { Products } from "./views/products";
import { Services } from "./views/services";
import { Contact } from "./views/contact";
//import Home from "./component/home.jsx";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	//	const basename = process.env.BASENAME || "";

	return (
		<Fragment>
			<Header />
			<Home />
			<About />
			<Products />
			<Services />
			<Contact />
			<Footer />
		</Fragment>
	);
};

export default Layout;
