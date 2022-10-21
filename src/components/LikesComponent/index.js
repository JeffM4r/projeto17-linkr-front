import { IconDisliked, IconLiked } from "./style";
import { useState, useEffect } from "react";
import { postLike, deleteLike } from "../../services/linkr";

export default function Likes({ postId }) {
	const [liked, setLiked] = useState(false);
	const token = localStorage.getItem("linkrUserToken");

	function insertLike(id) {
		postLike(id, token)
			.then((resp) => {
				console.log("worked");
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function dislike(id) {
		deleteLike(id, token)
			.then((resp) => {
				console.log("worked");
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
			<span>13 likes</span>
		</>
	);
}
