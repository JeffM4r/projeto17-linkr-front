import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	//align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const UserPosts = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 700px;
	color: white;
	margin: 145px 0 0 0;

	h2 {
		font-family: "Oswald", sans-serif;
		margin: 0 0 20px 20px;
		font-size: 43px;
	}

	span {
		display: flex;
		flex-direction: row;
		img {
			height: 50px;
			width: 50px;
			border-radius: 50%;
			margin-bottom: 16px;
		}
	}

	@media (max-width: 614px) {
		h2 {
			margin-left: 40px;
		}
	}
`;
