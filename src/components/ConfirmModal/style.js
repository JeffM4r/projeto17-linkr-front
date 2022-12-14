import styled from 'styled-components';

export const WhiteArea = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.7);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    right: 0;
    top: 0;
`;
export const Modalzone = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #333333;
    border-radius: 50px;
    color: white;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    width: 35%;
    padding: 10px;
    height: 230px;

    @media (max-width: 1270px) {
		width: 70%;
	}

    @media (max-width: 614px) {
		width: 100vw;
        border-radius: 0;
	}
`;

export const TextConfirmation = styled.div`
    font-size: 34px;
    line-height: 41px;
    text-align: center;
`;
export const Buttonzone = styled.div`
    display: flex;
    width: 70%;
    height: 50px;
    justify-content: space-around;
    align-items: center;

    div{
        height: 40px;
        padding: 20px;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        width: 90%;
	}
`;

export const Backbutton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-radius: 5px;
    font-size: 18px;
    line-height: 22px;
    color: #1877F2;
`;

export const ConfirmButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1877F2;
    border-radius: 5px;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`;