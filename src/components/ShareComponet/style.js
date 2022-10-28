import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 13px;
    text-align: center;
  }
`;

export const Repost = styled.div`
	display: flex;
  flex-direction: column;
	height: 100%;
	width: 100%;
  border-radius: 15px;
  background-color: #1E1E1E;
  margin-bottom: 20px;

  div {
    margin-bottom: 0;
  }

  @media (max-width: 614px) {
		border-radius: 0;
	}
`;

export const RepostTitle = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  p {
    display: flex;
    font-size: 11px;
    font-weight: 400;
  }
  h5 {
    margin-left: 4px;
    font-weight: 700;
  }
`;