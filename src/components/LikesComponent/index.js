import ReactTooltip from 'react-tooltip';
import { IconDisliked, IconLiked } from "./style";
import { useState, useEffect, useContext } from "react";
import { postLike, deleteLike } from "../../services/linkr";
import { getNumLikes } from "../../services/linkr";
import UserContext from "../contexts/UserContext";

export default function Likes({ postId, likedAlready, setLikedAlready }) {
	const [liked, setLiked] = useState(false);
	const [likedBy, setLikedBy] = useState({ numLikes: 0 });
	const [dataTip, setDataTip] = useState("...");
	const token = localStorage.getItem("linkrUserToken");
	const { refrash, setRefrash } = useContext(UserContext);


	useEffect(() => {

		setLiked(likedAlready);
		updateNumLike(likedAlready)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function updateNumLike (liked) {
		getNumLikes(postId, token)
			.then((resp) => {
				const numLikes = resp.data;
				setLikedBy(numLikes);
				updateDataTip(numLikes.whoLiked, liked, numLikes.numLikes)
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function updateDataTip (whoLikedList, like, numLikes) {
		let namesList = []
		whoLikedList.forEach(el => {
			namesList.push(el.name)
		});
		if(like){
			setDataTip(`Você ${namesList.join(', ')} ${(numLikes-3 && numLikes-3 > 0) ? `and others ${numLikes-3} people` : ''}`)
		}else{
			setDataTip(`${namesList.join(', ')} ${(numLikes-2 && numLikes-2 > 0) ? `and others ${numLikes-2} people` : ''}`)
		}
	}

	function insertLike(id) {
		setLikedAlready(true)
		postLike(id, token)
			.then((resp) => {
				updateNumLike(true)
				setLiked(true);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function dislike(id) {
		setLikedAlready(false)
		deleteLike(id, token)
			.then((resp) => {
				updateNumLike(false)
				setLiked(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	return (
		<>
		<ReactTooltip />
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
			<span data-tip={dataTip}>{likedBy.numLikes ? likedBy.numLikes : 0}</span>
		</>
	);
}
