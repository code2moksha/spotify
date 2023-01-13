import React from "react";
import logo from "../assets/logo.png";
import {
	MdHomeFilled,
	MdSearch,
	MdLibraryMusic,
	MdAdd,
	MdOutlineFavoriteBorder,
} from "react-icons/md";

export default function Navbar() {
	return (
		<div className="h-screen w-80 bg-black px-6 pt-6">
			<div className="h-10 w-full max-w-[131px]">
				<img alt="logo" src={logo} />
			</div>
			<div>
				<ul className="flex flex-col">
					<li alt="" className="flex">
						<MdHomeFilled className="text-light_grey" />
						<span className="text-light_grey">Home</span>
					</li>
					<li alt="" className="flex">
						<MdSearch className="text-light_grey" />
						<span className="text-light_grey">Search</span>
					</li>
					<li alt="" className="flex">
						<MdLibraryMusic className="text-light_grey" />
						<span className="text-light_grey">Your Library</span>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li alt="" className="flex">
						<MdAdd className="bg-light_grey" />
						<span className="text-light_grey">Create Playlist</span>
					</li>
					<li alt="" className="flex">
						<MdOutlineFavoriteBorder className="bg-light_grey" />
						<span className="text-light_grey">Liked Songs</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
