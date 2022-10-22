import { IconDisliked, IconLiked } from "./style";
import { useState, useEffect } from "react";
import { postLike, deleteLike } from "../../services/linkr";
import { getNumLikes } from "../../services/linkr";

export default function Likes({ postId, likedAlready }) {
	const [liked, setLiked] = useState(false);
	const [likedBy, setLikedBy] = useState({});
	const token = localStorage.getItem("linkrUserToken");

	useEffect(() => {
		if (likedAlready) {
			setLiked(true);
		}

		getNumLikes(postId)
			.then((resp) => {
				const numLikes = resp.data;
				setLikedBy(numLikes);
			})
			.catch((err) => {
				console.error(err);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function insertLike(id) {
		postLike(id, token)
			.then((resp) => {
				console.log("worked" + id);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function dislike(id) {
		deleteLike(id, token)
			.then((resp) => {
				console.log("worked" + id);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	return (
		<>
			{liked === false ? (
				<IconLiked
					onClick={() => {
						setLiked(true);
						insertLike(postId);
					}}
				/>
			) : (
				<IconDisliked
					onClick={() => {
						setLiked(false);
						dislike(postId);
					}}
				/>
			)}
			<span>{likedBy.numLikes ? likedBy.numLikes : 0}</span>
		</>
	);
}
