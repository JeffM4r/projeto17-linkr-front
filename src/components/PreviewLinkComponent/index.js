import { Snippet } from "./style";

export default function LinkPreview({ title, description, url, image }) {
	return (
		<Snippet onClick={() => window.open(url, "_blank")}>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
				<span>{url}</span>
			</div>
			<div>
				<img src={image} alt={"LinkPicture"} />
			</div>
		</Snippet>
	);
}
