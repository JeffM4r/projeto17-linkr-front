import { useState, useEffect } from 'react';
import { TimelinePage, PageStyle } from "./style";
import Posts from "./Posts";
import TrendingComponent from "../../TrendingComponent";
import HeaderComponent from "../../headerComponent";
import Publish from "../../PublishComponent";
import { getAllRecentPosts } from "../../../services/linkr";

export default function Timeline() {
	const [posts, setPosts] = useState([]);
<<<<<<< HEAD
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
		
=======
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
							loadingFullPage ? <></> : <Posts posts={posts} setPosts={setPosts} setLoadingFullPage={setLoadingFullPage} />
						}
					</TimelinePage>
					{
							loadingFullPage ? <></> : <TrendingComponent />
					}
				</PageStyle>
			</>
>>>>>>> main
	);
}
