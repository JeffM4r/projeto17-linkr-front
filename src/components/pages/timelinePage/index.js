import { TimelinePage, PageStyle } from "./style";
import Posts from "./Posts";
import TrendingComponent from "../../TrendingComponent";
import HeaderComponent from "../../headerComponent";
import Publish from "../../PublishComponent";
import { useState } from 'react';

export default function Timeline() {
	const [posts, setPosts] = useState([]);
	return (
		<>
		<HeaderComponent />
		<PageStyle>
			<TimelinePage>
				<div>
					<h2>timeline</h2>
				</div>
				<Publish setPosts={setPosts} />
				<Posts posts={posts} setPosts={setPosts} />
			</TimelinePage>
			<TrendingComponent />
		</PageStyle>
		</>
		
	);
}
