import mql from "@microlink/mql";
import { useState, useEffect } from "react";
import { PostStyle, IconDisliked, IconLiked } from "./style";
import LinkPreview from "../PreviewLinkComponent";

export default function Post({ username, picture, text, url }) {
	const [postData, setPostData] = useState({});
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		mql(url, {
			data: {
				avatar: {
					selector: "#avatar",
					type: "image",
					attr: "src",
				},
			},
		})
			.then((resp) => {
				const data = resp.data;
				setPostData(data);
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{postData.description ? (
				<PostStyle>
					<div>
						<img src={picture} alt={`profile ${username}`} />
						{liked === false ? (
							<IconLiked
								onClick={() => {
									setLiked(true);
									//InsertLike()
								}}
							></IconLiked>
						) : (
							<IconDisliked
								onClick={() => {
									setLiked(false);
									//deleteLike()
								}}
							></IconDisliked>
						)}
						<span>13 likes</span>
					</div>
					<div>
						<div>
							<h3>{username}</h3>
						</div>
						<p>{text}</p>
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
