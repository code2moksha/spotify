//import React from "react";
//import Navbar from "./components/Navbar";
//import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
//import Navbar from "./components/Navbar";
//import Header from "./components/Header";
import Layout from "./pages/Layout";

function App() {
	return (
		<Layout>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
			</Routes>
			{/* <Navbar /> */}
			{/* <Main /> */}
		</Layout>
	);
}

export default App;
