import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostStyle } from "./style";
import LinkPreview from "../PreviewLinkComponent";
import hashtagInText from "../hashtagInText";
import Likes from "../LikesComponent";
import { getMetaDados } from "../../services/linkr";
import Edit from "../EditPostComponent/index";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export default function Post({
	username,
	picture,
	text,
	url,
	postId,
	userId,
	setPosts,
	owner,
	likedAlready,
}) {
	const navigate = useNavigate();

	const [postData, setPostData] = useState({});
	const [editOn, setEditOn] = useState(false);
	const [inputText, setInputText] = useState(text);
	const [disabled, setDisabled] = useState(false);

	const iconStyle = {
		color: "white",
		fontSize: "20px",
		marginLeft: "16px",
		cursor: "pointer",
	};

	useEffect(() => {
		getMetaDados(url)
			.then((resp) => {
				const data = resp.data;
				setPostData(data);
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleGoToUserPage() {
		navigate(`/user/${userId}`);
	}

	return (
		<>
			{postData.description ? (
				<PostStyle>
					<div>
						<img src={picture} alt={`profile ${username}`} />
						<Likes postId={postId} likedAlready={likedAlready} />
					</div>
					<div>
						<div>
							<h3 onClick={handleGoToUserPage}>{username}</h3>
							{owner ? (
								<div>
									<FaPencilAlt
										style={iconStyle}
										onClick={() => {
											if (!editOn) {
												setInputText(text);
												setDisabled(false);
											}
											setEditOn(!editOn);
										}}
									/>
									<FaTrashAlt style={iconStyle} />
								</div>
							) : (
								""
							)}
						</div>
						<div style={{ display: editOn ? "none" : "inherit" }}>
							{hashtagInText(text)}
						</div>
						<Edit
							setPosts={setPosts}
							postId={postId}
							setDisabled={setDisabled}
							disabled={disabled}
							setEditOn={setEditOn}
							editOn={editOn}
							text={text}
							setInputText={setInputText}
							inputText={inputText}
						/>
						<LinkPreview
							title={postData.title}
							description={postData.description}
							url={postData.url}
							image={postData.image.url}
						/>
					</div>
				</PostStyle>
			) : (
				<PostStyle>
					<h3>Loading...</h3>
				</PostStyle>
			)}
		</>
	);
}
