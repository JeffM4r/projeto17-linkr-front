import { useState, useEffect } from "react";
import Error from "../../ErrorComponent";
import Post from "../../PostComponent";
import { getAllRecentPosts, getNumFollowers } from "../../../services/linkr";
import InfiniteScroll from "react-infinite-scroll-component";
import { TextNoPosts } from './style';

export default function Posts({ posts, setPosts, setLoadingFullPage }) {
	const [disabled, setDisabled] = useState(false);
	const token = localStorage.getItem("linkrUserToken");
	const [limit, setLimit] = useState(10)
	const [followersNumber, setFollowersNumber] = useState(0)

	useEffect(() => {
		getFriends()
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

	function callNew() {
		setLimit(prev => prev + 10)
	}

	async function getFriends (){
		try {
			const res = await getNumFollowers(token)
			console.log(res.data)
			setFollowersNumber(res.data)
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<InfiniteScroll
			dataLength={posts.length}
			next={callNew}
			hasMore={true}
			style={{ overflow: 'hidden' }}
			scrollThreshold={0.99}
		>
			{posts.length !== 0 ? (
				posts.slice(0, limit).map((el, i) => (
					<Post
						setPosts={setPosts}
						username={el.name}
						picture={el.picture}
						text={el.text}
						url={el.url}
						userId={el.userId}
						postId={el.postId}
						owner={el.owner}
						likedAlready={el.liked}
						key={`key ${i}`}
						setLoadingFullPage={setLoadingFullPage}
					/>
				))
			) : followersNumber === 0 ? (
				<>
					<Error condition={disabled} />
					<TextNoPosts>You don't follow anyone yet. Search for new friends!</TextNoPosts>
				</>
			): (
				<>
					<Error condition={disabled} />
					<TextNoPosts>No posts found from your friends</TextNoPosts>
				</>
			)}
		</InfiniteScroll>
	);
}
