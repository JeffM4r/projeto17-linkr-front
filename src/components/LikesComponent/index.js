import { IconDisliked, IconLiked } from "./style";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Likes({ postId }) {
	const [liked, setLiked] = useState(false);
	const token = localStorage.getItem("linkrUserToken");

	function insertLike(id) {
		const conf = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios
			.post(`http://localhost:4000/likes/${id}`, {}, conf)
			.then((resp) => {
				console.log("worked");
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function deleteLike(id) {
		const conf = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios
			.delete(`http://localhost:4000/likes/${id}`, conf)
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
						deleteLike(postId);
					}}
				/>
			)}
			<span>13 likes</span>
		</>
	);
}
