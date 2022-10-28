import { useState } from 'react';
import { TimelinePage, PageStyle } from "./style";
import Posts from "./Posts";
import { useParams } from "react-router-dom";
import TrendingComponent from "../../TrendingComponent";
import HeaderComponent from "../../headerComponent";
import Publish from "../../PublishComponent";
import NewPosts from '../../NewPostsComponent';

export default function HashtagPage() {
	const [posts, setPosts] = useState([]);
	const [loadingFullPage, setLoadingFullPage] = useState(false)
	const [NewPostsUpdateView, setNewPostUpdateView] = useState(false)
	const params = useParams();


	return (
			<>
				<HeaderComponent />
				<PageStyle>
					<TimelinePage>
						<div>
							<h2>#{params.hashtag}</h2>
						</div>
						<Publish setPosts={setPosts} setLoadingFullPage={setLoadingFullPage} />
						<NewPosts view={NewPostsUpdateView} setView={setNewPostUpdateView} setPosts={setPosts} setLoadingFullPage={setLoadingFullPage} />
						{
							loadingFullPage ? <></> : <Posts posts={posts} setPosts={setPosts} setLoadingFullPage={setLoadingFullPage} hashtag={params.hashtag}/>
						}
					</TimelinePage>
					{
							loadingFullPage ? <></> : <TrendingComponent />
					}
				</PageStyle>
			</>
	);
}
