import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
	return (
		// <div className="grid grid-rows-2 grid-cols-4">
		<div className="grid grid-cols-main grid-rows-main">
			<Navbar />
			<Header />
			{children}
		</div>
	);
};

export default Layout;
