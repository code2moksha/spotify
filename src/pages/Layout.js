import React from "react";

import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
	return (
		// <div className="grid grid-rows-2 grid-cols-4">
		<div className="grid grid-cols-main">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
