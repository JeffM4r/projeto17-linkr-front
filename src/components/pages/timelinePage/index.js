import { TimelinePage, PageStyle } from "./style";
import Posts from "./Posts";
import TrendingComponent from "../../TrendingComponent";

export default function Timeline() {
	return (
		<PageStyle>
			<TimelinePage>
				<div>
					<h2>timeline</h2>
				</div>
				<Posts />
			</TimelinePage>
			<TrendingComponent />
		</PageStyle>
	);
}
