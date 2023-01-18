import React from "react";
//import songs from "../songs/songs.json";

function MusicCategory() {
	return (
		<div className="mb-4 flex justify-between">
			<h2 className=" text-white text-xl font-medium">Focus</h2>
			<a
				className="text-xs font-medium text-light_grey hover:underline"
				href="/"
			>
				SHOW ALL
			</a>
		</div>
	);
}

export default MusicCategory;
