import styled from "styled-components";

export const PostStyle = styled.div`
	background-color: #171717;
	padding: 20px;
	border-radius: 15px;
	display: flex;
	gap: 15px;
	font-size: 17px;
	font-weight: 300;
	margin-bottom: 20px;
	width: 611px;
	display: flex;

	div:nth-child(2) {
		width: 100%;
	}

	div:nth-child(1) {
		img {
			height: 50px;
			width: 50px;
			border-radius: 50%;
		}
	}

	h3 {
		font-weight: 500;
		font-size: 19px;
		margin-bottom: 8px;
	}

	p {
		line-height: 19px;
	}
`;

export const Snippet = styled.div`
	border: 1px groove rgba(250, 250, 250, 0.2);
	border-radius: 15px;
	margin-top: 15px;
	height: 150px;
	display: flex;

	div {
		padding: 15px;
	}

	img {
		height: 100%;
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
	}
`;
