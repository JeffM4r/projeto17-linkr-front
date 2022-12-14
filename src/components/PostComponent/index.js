import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostStyle, ModalZone, PostC} from "./style";
import LinkPreview from "../PreviewLinkComponent";
import hashtagInText from "../hashtagInText";
import Likes from "../LikesComponent";
import { getMetaDados, getCountShare } from "../../services/linkr";
import Edit from "../EditPostComponent/index";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import UserContext from "../contexts/UserContext";
import DeleteModal from "../deleteModalComponent";
import { CommentsButton, CommentsComponent } from "../ComentsComponent";
import { ShareButton } from "../ShareComponet";

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
	setLoadingFullPage
}) {
	const navigate = useNavigate();
	const { refrash } = useContext(UserContext);
	const [postData, setPostData] = useState({});
	const [editOn, setEditOn] = useState(false);
	const [inputText, setInputText] = useState(text);
	const [disabled, setDisabled] = useState(false);
	const [likedAlreadi, setLikedAlreadi] = useState(likedAlready)
	const [showComments, setShowComments] = useState(false)
	const [commentsCount, setCommentsCount] = useState(0)
	const [shareCount, setShareCount] = useState('0')

	const [openDelModal, setOpenDelModal] = useState(false)

	const iconStyle = {
		color: "white",
		fontSize: "20px",
		marginLeft: "16px",
		cursor: "pointer",
	};

	useEffect(() => {
		getCountShare(postId)
		.then((resp) => {
			const count = resp.data
			setShareCount(count.count)
		})
		.catch((err) => console.error(err))
		
		getMetaDados(url)
			.then((resp) => {
				const data = resp.data;
				if (data.image == null) {
					data.image = {
						url: "https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png",
					};
				}
				setPostData(data);
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refrash]);

	function handleGoToUserPage() {
		navigate(`/user/${userId}`);
	}

	return (
		openDelModal ?
			<ModalZone>
				<DeleteModal setOpenDelModal={setOpenDelModal} id={postId} setLoadingFullPage={setLoadingFullPage} />
			</ModalZone>
			:
			<>
				{postData.description ? (
					<>
					<PostStyle>
						<div>
							<img
								src={picture}
								alt={`profile ${username}`}
								onClick={handleGoToUserPage}
							/>
							<Likes postId={postId} likedAlready={likedAlreadi} setLikedAlready={setLikedAlreadi} />
							<CommentsButton showComments={showComments} setShowComments={setShowComments} commentsCount={commentsCount} />
							<ShareButton shareCount={shareCount} postId={postId} setLoadingFullPage={setLoadingFullPage} setPosts={setPosts} />
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
										<FaTrashAlt style={iconStyle} onClick={() => { setOpenDelModal(true) }} />
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
					<CommentsComponent display={showComments} postId={postId} setCommentsCount={setCommentsCount} />
					</>
				) : (
					<PostStyle>
						<h3>Loading...</h3>
					</PostStyle>
				)}
			</>
	);
}
