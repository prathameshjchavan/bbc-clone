import React from "react";
import { FaUserAlt } from "react-icons/fa";

function Header() {
	return (
		<div className="mx-auto bg-black">
			<div className="max-w-7xl flex mx-auto py-2">
				<img src="/assets/logo.png" className="h-10" alt="BBC logo" />

				{/* Sign In */}
				<div className="text-white flex items-center ml-4 w-32 border-b-2 cursor-pointer border-black hover:border-blue-500 hover:w-56 transition-all ease-in">
					<FaUserAlt className="h-6 w-6" />
					<span className="font-bold ml-2 text-sm">Sign in</span>
				</div>

				{/* Divider */}
				<div className="h-full w-10 bg-red-400" />
			</div>
		</div>
	);
}

export default Header;
