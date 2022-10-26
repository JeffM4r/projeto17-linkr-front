// import { useState, useEffect } from "react";
// import Error from "../../ErrorComponent";
// import Post from "../../PostComponent";
// import { getAllRecentPosts } from "../../../services/linkr";

// export default function Posts({ posts, setPosts, setLoadingFullPage }) {
// 	const [disabled, setDisabled] = useState(false);
// 	const token = localStorage.getItem("linkrUserToken");

// 	useEffect(() => {
// 		getAllRecentPosts(token)
// 			.then((resp) => {
// 				const postsData = resp.data;
// 				setPosts(postsData);
// 			})
// 			.catch((err) => {
// 				console.error(err);
// 				setDisabled(true);
// 			});
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, []);




// 	return (
// 		<>
// 			{posts.length !== 0 ? (
// 				posts.map((el, i) => (
// 					<Post
// 						setPosts={setPosts}
// 						username={i+1} //el.name
// 						picture={el.picture}
// 						text={el.text}
// 						url={el.url}
// 						userId={el.userId}
// 						postId={el.postId}
// 						owner={el.owner}
// 						likedAlready={el.liked}
// 						key={`key ${i}`}
// 						setLoadingFullPage={setLoadingFullPage}
// 					/>
// 				))
// 			) : (
// 				<>
// 					<Error condition={disabled} />
// 					<p>"There are no posts yet..."</p>
// 				</>
// 			)}
// 		</>
// 	);
// }

import { useState, useEffect } from "react";
import Error from "../../ErrorComponent";
import Post from "../../PostComponent";
import { getAllRecentPosts } from "../../../services/linkr";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Posts({ posts, setPosts, setLoadingFullPage }) {
	const [disabled, setDisabled] = useState(false);
	const token = localStorage.getItem("linkrUserToken");

	const [limit, setLimit] = useState(10)

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
	}, []);

	function callNew() {
		setLimit(prev => prev + 10)
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
						username={i + 1} //el.name
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
			) : (
				<>
					<Error condition={disabled} />
					<p>"There are no posts yet..."</p>
				</>
			)}
		</InfiniteScroll>
	);
}
