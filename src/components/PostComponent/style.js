import styled from "styled-components";

export const PostStyle = styled.div`
	background-color: #171717;
	padding: 20px;
	border-radius: 15px;
	display: flex;
	font-size: 17px;
	font-weight: 300;
	margin-bottom: 20px;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	word-wrap: break-word;

	h3 {
		font-weight: 500;
		font-size: 19px;
		margin-bottom: 8px;
	}

	p {
		line-height: 19px;
	}

	> div:nth-child(2) {
		width: calc(100% - 65px);
		div{
			display: flex;
			justify-content: space-between;
		}
	}

	> div:nth-child(1) {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 22px;

		span {
			font-size: 13px;
			margin-top: 10px;
		}

		img {
			height: 50px;
			width: 50px;
			border-radius: 50%;
			margin-bottom: 16px;
		}
	}

	@media (max-width: 614px) {
		padding: 10px;
		border-radius: 0;

		> div:nth-child(2) {
			width: calc(100% - 50px);
		}

		> div:nth-child(1) {
			img {
				height: 40px;
				width: 40px;
				border-radius: 50%;
			}
		}
	}
`;
