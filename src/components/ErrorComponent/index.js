import { ErrorPage } from "./style";

export default function Error({ condition }) {
	return (
		<ErrorPage style={{ display: condition ? "inherit" : "none" }}>
			<div>
				<p>
					An error occured while trying to fetch the posts, please refresh the
					page
				</p>
			</div>
		</ErrorPage>
	);
}
