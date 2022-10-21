import styled from "styled-components";

const Publishstyle = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 229px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    background-color: white;
    position: relative;
    z-index: 999;
    margin-bottom: 20px;
    @media (max-width: 614px) {
        width: 100vw;
        border-radius: 0;
    }
`

const ImgBody = styled.div`
    width: 50px;
    height: 50px;
    margin-bottom: 120px;
    margin-right: 20px;

    @media (max-width: 614px) {
    display: none;
  }

`

const PerfilImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 26.5px;
`

const Form = styled.form`
    display: grid;
    width: 80%;
    height: 240px;
    margin-top: 20px;

    div{
        justify-self: end;
    }

    @media (max-width: 614px) {
        width: 90vw;
    }

`

const WhatToday = styled.p`
    justify-self: flex-start;
    margin: 0;
    margin-top: 25px;
    margin-bottom: 5px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #707070;

    @media (max-width: 614px) {
        justify-self: center;
    }
`

const Inputlink = styled.input`
    border: none;
    height: 40px;
    width: 100%;
    background: #EFEFEF;
    border-radius: 5px;
    font-style: normal;
    font-size: 15px;
    color: #949494;
    outline: none;
    padding-left: 15px;
    padding: 10px;

    &::placeholder {
        font-family: Arial, Helvetica, sans-serif;
        font-style: normal;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
   }
`

const Inputpost = styled.textarea`
    line-break: auto;
    border: none;
    width: 100%;
    height: 50px;
    margin: 5px 0 5px 0;
    background: #EFEFEF;
    border-radius: 5px;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
    outline: none;
    padding-left: 15px;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    resize: none;

    &::placeholder {
        font-family: Arial, Helvetica, sans-serif;
        font-style: normal;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
   }

`
const ButtonArea = styled.div`
    width: 112px;
    margin-bottom: 30px;
`

const Button = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-weight: 700;
    width: 112px;
    height: 31px;
    background: #1877F2;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
`
const ButtonDesative = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-weight: 700;
    width: 112px;
    height: 31px;
    background: #1877F2;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    background-color: gray;
`

export{
    Publishstyle, ImgBody, PerfilImg, Form, WhatToday, Inputlink, Inputpost, Button, ButtonArea, ButtonDesative
}