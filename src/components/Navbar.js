import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
	MdHomeFilled,
	MdSearch,
	MdLibraryMusic,
	MdAdd,
	MdOutlineFavoriteBorder,
} from "react-icons/md";

export default function Navbar() {
	return (
		<div className="h-screen bg-black px-6 pt-6 flex flex-col justify-between">
			<div className=" ">
				<div className="h-10 max-w-[131px] mb-7">
					<img alt="logo" src={logo} />
				</div>
				<div className="mb-7">
					<ul className="flex flex-col gap-y-2">
						<li alt="">
							<Link
								to="/"
								className="flex justify-start items-center  text-light_grey hover:text-white"
							>
								<MdHomeFilled className="mr-2 text-3xl" />
								<span className="ml-1 text-xs font-semibold">Home</span>
							</Link>
						</li>
						<li alt="">
							<Link
								to="/Search"
								className="flex justify-start items-center text-light_grey hover:text-white"
							>
								<MdSearch className=" mr-2 text-3xl" />
								<span className=" ml-1 text-xs font-semibold">Search</span>
							</Link>
						</li>
						<li alt="" className="flex justify-start items-center">
							<MdLibraryMusic className="text-light_grey mr-2 text-3xl" />
							<span className="text-light_grey ml-1 text-xs font-semibold">
								Your Library
							</span>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex flex-col gap-y-2">
						<li alt="" className="flex justify-start items-center">
							<div className="bg-light_grey mr-2 p-1">
								<MdAdd className="bg-light_grey text-lg" />
							</div>
							<span className="text-light_grey ml-1 text-xs font-semibold">
								Create Playlist
							</span>
						</li>
						<li alt="" className="flex justify-start items-center">
							<div className="bg-light_grey mr-2 p-1">
								<MdOutlineFavoriteBorder className="bg-light_grey  text-lg" />
							</div>
							<span className="text-light_grey ml-1 text-xs font-semibold">
								Liked Songs
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className=" pb-5">
				<a
					href="https://www.spotify.com/in-en/legal/cookies-policy/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline text-light_grey"
				>
					<span className="text-light_grey text-xs">Cookies</span>
				</a>
			</div>
		</div>
	);
}
