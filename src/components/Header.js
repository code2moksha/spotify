import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Header = () => {
	return (
		<div className=" top-0 sticky bg-black opacity-50 col-start-2 col-span-4 flex justify-between items-center px-8 py-4 ">
			<div className="flex gap-x-4">
				<button className="h-9 w-9 border rounded-full bg-black">
					<MdKeyboardArrowLeft className="w-8 h-8 text-light_grey" />
				</button>
				<button className="h-9 w-9 border rounded-full bg-black">
					<MdKeyboardArrowRight className="w-8 h-8 text-light_grey" />
				</button>
			</div>
			<div className="flex justify-center items-center">
				<button className="bg-transparent self-center pl-4 pr-7 w-32 h-11 text-light_grey hover:cursor-default hover:text-white hover:font-semibold">
					Sign up
				</button>
				<button className="bg-white self-center text-sm font-semibold text-black pl-6 pr-7 w-24 h-11 hover:scale-105 hover:bg-shadow_grey hover:cursor-default border rounded-full">
					Log in
				</button>
			</div>
		</div>
	);
};

export default Header;
