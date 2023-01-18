import React from "react";
import songs from "../songs/songs.json";

function MusicCard() {
	return (
		<div className="grid grid-cols-5">
			{songs.map((record, i) => (
				<div key={i}>
					<img src={record.path} alt="music" />
					<div>{record.title}</div>
					<div>{record.description}</div>
				</div>
			))}
		</div>
	);
}

export default MusicCard;
