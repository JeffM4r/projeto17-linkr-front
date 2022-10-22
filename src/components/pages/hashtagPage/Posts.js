import { useState, useEffect } from "react";
import Error from "../../ErrorComponent";
import Post from "../../PostComponent";
import { getHastagPosts } from "../../../services/linkr";

export default function Posts({ posts, setPosts, hashtag }) {
	const [disabled, setDisabled] = useState(false);
	const token = localStorage.getItem("linkrUserToken");

	useEffect(() => {
		getHastagPosts(hashtag,token)
			.then((resp) => {
				const postsData = resp.data;
				setPosts(postsData);
				console.log( resp.data);
			})
			.catch((err) => {
				console.error(err);
				setDisabled(true);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{posts.length !== 0 ? (
				posts.map((el, i) => (
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
					/>
				))
			) : (
				<>
					<Error condition={disabled} />
					<p>"There are no posts yet..."</p>
				</>
			)}
		</>
	);
}
