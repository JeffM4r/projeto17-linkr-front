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
				<img
					src={image}
					alt={"LinkPicture"}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null;
						currentTarget.src =
							"https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png";
					}}
				/>
			</div>
		</Snippet>
	);
}
