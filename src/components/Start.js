import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import bazzi from '../styles/img/bazzi_cut.png';

const StartContainer = styled.div`
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .bazzi {
        width: 30vh;
        height: 30vh;
    };
`

const StartTitle = styled.div`
    font-size: 5vh;
    font-family: 'PyeongChangPeace-Bold';
    white-space: pre-wrap;
    text-align: center;
`

const StartMain = styled.div`
    font-size: 1.8vh;
`

const StartBtn = styled.button`
    width: 30vh;
    height: 7vh;
    border-style: none;
    border-radius: 5px;
    color: #fff;
    font-size: 2.4vh;
    font-family: 'GmarketSansMedium';
    background-image: linear-gradient(to right, #667eea, #8E37D7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    cursor: pointer;
    position: relative;
    &:hover {
        opacity: .8;
        transition: 0.2s;
        bottom: 2px;
    }
    &:active {
        top: 4px;
    }
`


const Start = () => {
    const titleContent = '카트라이더 리그\n명장면 월드컵'
    return (
        <StartContainer>
            <StartTitle>{titleContent}</StartTitle>
            <img src={bazzi} className="bazzi" alt="main" />
            <StartMain>당신이 생각하는 최고의 명장면에 투표해 주세요!!</StartMain>
            <Link to="/main"><StartBtn>Start</StartBtn></Link>
        </StartContainer>
    )
}

export default Start