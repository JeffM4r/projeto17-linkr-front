import { IconDisliked, IconLiked } from "./style";
import { useState, useEffect, useContext } from "react";
import { postLike, deleteLike } from "../../services/linkr";
import { getNumLikes } from "../../services/linkr";
import UserContext from "../contexts/UserContext";

export default function Likes({ postId, likedAlready, setLikedAlready }) {
	const [liked, setLiked] = useState(false);
	const [likedBy, setLikedBy] = useState({ numLikes: 0 });
	const token = localStorage.getItem("linkrUserToken");
	const { refrash, setRefrash } = useContext(UserContext);

	useEffect(() => {

		setLiked(likedAlready);

		updateNumLike()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function updateNumLike () {
		getNumLikes(postId)
			.then((resp) => {
				const numLikes = resp.data;
				console.log(numLikes)
				setLikedBy(numLikes);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function insertLike(id) {
		setLikedAlready(true)
		postLike(id, token)
			.then((resp) => {
				updateNumLike()
				setLiked(true);
				console.log("worked");
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function dislike(id) {
		setLikedAlready(false)
		deleteLike(id, token)
			.then((resp) => {
				updateNumLike()
				setLiked(false);
				console.log("worked");
			})
			.catch((err) => {
				console.error(err);
			});
	}

	return (
		<>
			{liked ? (
				<IconLiked
					onClick={() => {
						dislike(postId);
						setRefrash(!refrash);
					}}
				/>
			) : (
				<IconDisliked
					onClick={() => {
						insertLike(postId);
						setRefrash(!refrash);
					}}
				/>
			)}
			<span>{likedBy.numLikes ? likedBy.numLikes : 0}</span>
		</>
	);
}
