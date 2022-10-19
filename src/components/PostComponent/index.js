import { PostStyle, Snippet } from "./style";
//const urlMetadata = require("url-metadata");
//import urlMetaData from "url-metadata";

export default function Post({ username, picture, text, url }) {
	return (
		<PostStyle>
			<div>
				<img src={picture} alt={`profile ${username}`} />
			</div>
			<div>
				<h3>{username}</h3>
				<p>{text}</p>
				<Snippet>
					<div>
						<p>{url}</p>
					</div>
					<img src={picture} alt={`profile ${username}`} />
				</Snippet>
			</div>
		</PostStyle>
	);
}
