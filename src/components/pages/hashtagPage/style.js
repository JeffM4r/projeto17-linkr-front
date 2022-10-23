import styled from "styled-components";

export const PageStyle = styled.div`
	display: flex;
	//align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const TimelinePage = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 700px;
	color: white;
	margin: 125px 0 0 0;

	h2 {
		font-family: "Oswald", sans-serif;
		margin-bottom: 40px;
		font-size: 43px;
	}

	@media (max-width: 614px) {
		h2 {
			margin-left: 40px;
		}
	}
`;
