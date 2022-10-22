import { useState, useEffect } from "react";
import Error from "../../ErrorComponent";
import Post from "../../PostComponent";
import { getHastagPosts } from "../../../services/linkr";

export default function Posts({hashtag}) {
	const [posts, setPosts] = useState([]);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		getHastagPosts(hashtag)
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
			{posts.length !== 0 ? (
				posts.map((el, i) => (
					<Post
						username={el.name}
						picture={el.picture}
						text={el.text}
						url={el.url}
						userId={el.userId}
						postId={el.postId}
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
