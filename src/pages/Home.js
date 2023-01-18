import Header from "../components/Header";
import MusicCard from "../components/MusicCard";
import MusicCategory from "../components/MusicCategory";
export function Home() {
	return (
		<div className="bg-med_black">
			<Header />
			<div className="col-start-2 col-span-4 overflow-y-scroll p-2">
				<MusicCategory />
				<MusicCard />
			</div>
		</div>
	);
}
