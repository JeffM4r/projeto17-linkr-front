import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../../ErrorComponent";
import Post from "../../PostComponent";

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [disabled, setDisabled] = useState(false);

	const BASE_URL = "http://localhost:4000";

	useEffect(() => {
		axios
			.get(`${BASE_URL}/posts`)
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
						username={el.username}
						picture={el.picture}
						text={el.text}
						url={el.url}
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
