import mql from "@microlink/mql";
import { useState, useEffect } from "react";
import { PostStyle } from "./style";
import LinkPreview from "../PreviewLinkComponent";
import hashtagInText from "../hashtagInText";
import Likes from "../LikesComponent";

export default function Post({ username, picture, text, url, postId, userId }) {
	const [postData, setPostData] = useState({});
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
						<Likes postId={postId} />
					</div>
					<div>
						<div>
							<h3>{username}</h3>
						</div>
						<div>{hashtagInText(text)}</div>
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
