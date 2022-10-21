import { TimelinePage, PageStyle } from "./style";
import Posts from "./Posts";
import HeaderComponent from "../../headerComponent";

export default function Timeline() {
	return (
		<>
		<HeaderComponent />
		<PageStyle>
			<TimelinePage>
				<div>
					<h2>timeline</h2>
				</div>
				<Posts />
			</TimelinePage>
		</PageStyle>
		</>
		
	);
}
