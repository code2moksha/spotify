import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Header = () => {
	return (
		<div className="bg-light_black col-start-2 col-span-4 flex justify-between items-center">
			<div>
				<button>
					<MdKeyboardArrowLeft />
				</button>
				<button>
					<MdKeyboardArrowRight />
				</button>
			</div>
			<div>
				<button>Sign up</button>
				<button>Log in</button>
			</div>
		</div>
	);
};

export default Header;
