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
			<div className="h-10 w-full max-w-[131px] mb-7">
				<img alt="logo" src={logo} />
			</div>
			<div className="mb-7">
				<ul className="flex flex-col gap-y-2">
					<li alt="" className="flex justify-start items-center">
						<MdHomeFilled className="text-light_grey mr-2 text-3xl" />
						<span className="text-light_grey ml-1 text-xs font-semibold">
							Home
						</span>
					</li>
					<li alt="" className="flex justify-start items-center">
						<MdSearch className="text-light_grey mr-2 text-3xl" />
						<span className="text-light_grey ml-1 text-xs font-semibold">
							Search
						</span>
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
	);
}
