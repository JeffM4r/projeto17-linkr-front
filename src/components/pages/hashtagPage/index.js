import { TimelinePage, PageStyle } from "./style";
import { useParams } from "react-router-dom";
import Posts from "./Posts";
import TrendingComponent from "../../TrendingComponent";
import HeaderComponent from "../../headerComponent";
import Publish from "../../PublishComponent";
import { useState } from 'react';

export default function HashtagPage() {
	const [posts, setPosts] = useState([]);
	const params = useParams();

	return (
		<>
		<HeaderComponent />
		<PageStyle>
			<TimelinePage>
				<div>
					<h2>#{params.hashtag}</h2>
				</div>
				<Publish setPosts={setPosts} />
				<Posts posts={posts} setPosts={setPosts} hashtag={params.hashtag} />
			</TimelinePage>
			<TrendingComponent />
		</PageStyle>
		</>
		
	);
}
