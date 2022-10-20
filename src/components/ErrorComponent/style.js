import styled from "styled-components";

export const ErrorPage = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(23, 23, 23, 0.95);
	font-size: 28px;

	div {
		background-color: #333333;
		color: white;
		width: 70vw;
		max-width: 500px;
		height: 30vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 25px;
		padding: 10px;
	}
`;
