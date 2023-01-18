import React, { useState } from "react";
import songs from "../songs/songs.json";
import play from "../assets/play.png";

function MusicCard() {
	const [isShown, setIsShown] = useState(null);

	return (
		<div className="grid grid-cols-musicCard gap-x-6">
			{songs.map((record, i) => (
				<div
					key={record.id}
					className="flex flex-col p-4 box-border rounded bg-card_black hover:bg-select_grey duration-300 ease-linear"
					onMouseEnter={() => setIsShown(record.id)}
					onMouseLeave={() => setIsShown(null)}
				>
					<div class="relative">
						<img src={record.path} alt="music" className="rounded mb-4" />
						{isShown === record.id && (
							<div class="absolute right-2 top-28">
								<button className="w-12 h-12 bg-decorative_green rounded-full">
									<img
										src={play}
										alt="play"
										className="relative w-6 h-6 left-3"
									/>
								</button>
							</div>
						)}
					</div>
					<div className="text-white text-sm font-bold mb-2">
						{record.title}
					</div>
					<div className="text-light_grey text-xs font-semibold max-h-9 overflow-hidden leading-relaxed text-ellipsis line-clamp-2">
						{record.description}
					</div>
				</div>
			))}
		</div>
	);
}

export default MusicCard;
