import { TimelinePage, PageStyle } from "./style";
import Posts from "./Posts";
import TrendingComponent from "../../TrendingComponent";
import HeaderComponent from "../../headerComponent";
import Publish from "../../PublishComponent";
import { useContext, useState } from 'react';
import DeleteModal from "../../deleteModalComponent";
import UserContext from "../../contexts/UserContext";


export default function Timeline() {
	const [posts, setPosts] = useState([]);
	const { openModal } = useContext(UserContext)

	return (
		openModal ? <>
			<DeleteModal />
			
			<HeaderComponent />
			<PageStyle>
				<TimelinePage>
					<div>
						<h2>timeline</h2>
					</div>
					<Publish setPosts={setPosts} />
					<Posts posts={posts} setPosts={setPosts}></Posts>
				</TimelinePage>
				<TrendingComponent />
			</PageStyle>
		</>
			:
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
