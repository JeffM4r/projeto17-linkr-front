import { useState, useEffect } from 'react';
import { TimelinePage, PageStyle } from "./style";
import Posts from "./Posts";
import TrendingComponent from "../../TrendingComponent";
import HeaderComponent from "../../headerComponent";
import Publish from "../../PublishComponent";
import { getAllRecentPosts } from "../../../services/linkr";

export default function Timeline() {
	const [posts, setPosts] = useState([]);
	const [disabled, setDisabled] = useState(false);
	const token = localStorage.getItem("linkrUserToken");

	useEffect(() => {
		getAllRecentPosts(token)
			.then((resp) => {
				const postsData = resp.data;
				setPosts(postsData);
			})
			.catch((err) => {
				console.error(err);
				setDisabled(true);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
		<HeaderComponent />
		<PageStyle>
			<TimelinePage>
				<div>
					<h2>timeline</h2>
				</div>
				<Publish setPosts={setPosts} />
				<Posts posts={posts} setPosts={setPosts} disabled={disabled} />
			</TimelinePage>
			<TrendingComponent />
		</PageStyle>
		</>
		
	);
}
