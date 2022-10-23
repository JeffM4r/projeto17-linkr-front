import { TimelinePage, PageStyle } from "./style";
import Posts from "./Posts";
import TrendingComponent from "../../TrendingComponent";
import HeaderComponent from "../../headerComponent";
import Publish from "../../PublishComponent";
import { useState } from 'react';

export default function Timeline() {
	const [posts, setPosts] = useState([]);
	const [loadingFullPage, setLoadingFullPage] = useState(false)
	return (
		<>
		<HeaderComponent />
		<PageStyle>
			<TimelinePage>
				<div>
					<h2>timeline</h2>
				</div>
				<Publish setPosts={setPosts} setLoadingFullPage={setLoadingFullPage} />
				{
					loadingFullPage ? <></> : <Posts posts={posts} setPosts={setPosts} />
				}
			</TimelinePage>
			<TrendingComponent />
		</PageStyle>
		</>
		
	);
}
