import { useState, useEffect } from 'react';
import { TimelinePage, PageStyle } from "./style";
import Posts from "./Posts";
import TrendingComponent from "../../TrendingComponent";
import HeaderComponent from "../../headerComponent";
import Publish from "../../PublishComponent";
import { getAllRecentPosts } from "../../../services/linkr";
import NewPosts from '../../NewPostsComponent';

export default function Timeline() {
	const [posts, setPosts] = useState([]);
	const [loadingFullPage, setLoadingFullPage] = useState(false)
	const [NewPostsUpdateView, setNewPostUpdateView] = useState(false)

	return (
			<>
				<HeaderComponent />
				<PageStyle>
					<TimelinePage>
						<div>
							<h2>timeline</h2>
						</div>
						<Publish setPosts={setPosts} setLoadingFullPage={setLoadingFullPage} />
						<NewPosts view={NewPostsUpdateView} setView={setNewPostUpdateView} setPosts={setPosts} setLoadingFullPage={setLoadingFullPage} />
						{
							loadingFullPage ? <></> : <Posts posts={posts} setPosts={setPosts} setLoadingFullPage={setLoadingFullPage} />
						}
					</TimelinePage>
					{
							loadingFullPage ? <></> : <TrendingComponent />
					}
				</PageStyle>
			</>
	);
}
