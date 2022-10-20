import styled from "styled-components";

export const Snippet = styled.div`
	border: 1px groove rgba(250, 250, 250, 0.2);
	border-radius: 15px;
	margin-top: 15px;
	height: 150px;
	display: flex;
	color: #cecece;
	word-wrap: break-word;

	> div:nth-child(1) {
		width: 70%;
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	> div:nth-child(2) {
		width: 30%;

		img {
			width: 100%;
			height: 100%;
			border-top-right-radius: 15px;
			border-bottom-right-radius: 15px;
		}
	}

	h3 {
		font-size: 18px;
	}

	text {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	p {
		color: #9b9595;
		font-size: 14px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	span {
		font-size: 12px;
	}

	:hover {
		cursor: pointer;
	}

	@media (max-width: 614px) {
		height: 120px;

		> div:nth-child(1) {
			padding: 10px;
		}

		h3 {
			font-size: 14px;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		span {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}
`;
