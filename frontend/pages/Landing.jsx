import React, { useContext } from "react";
import styled, { keyframes } from 'styled-components';

import logo from "../assets/logo-2do.png";

import { useNavigate } from "react-router";
import { AppContext } from '../components/AppContainer'



const Landing = () => {

    const getRandomSecondsCount = () => {
        let unit = Math.random();
        let scaled = unit * 8;
        let offset = scaled + 3;
        offset = offset < 4 ? 4 : offset;
        offset = offset > 10 ? 10: offset;
        return offset;
    }
    const navigate = useNavigate();

    const { isConnected } = useContext(AppContext);
    if (isConnected) {
        navigate('/home')
    }
    return (
        <SContainer>
            <SplashLogo src={logo} randomSeconds={getRandomSecondsCount()}></SplashLogo>
        </SContainer>
    )
}

const SContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HueRotate = keyframes`
    0%  { filter: hue-rotate(0deg); }
    10% { filter: hue-rotate(36deg); }
    20% { filter: hue-rotate(66deg); }
    30% { filter: hue-rotate(99deg), contrast(4); }
    40% { filter: hue-rotate(130deg), invert(.9); }
    50% { filter: hue-rotate(167deg); }
    60% { filter: hue-rotate(210deg), contrast(8), grayscale(10%); }
    70% { filter: hue-rotate(249deg), invert(.4), grayscale(100%); }
    80% { filter: hue-rotate(294deg), contrast(7), grayscale(10%); }
    90% { filter: hue-rotate(330deg), saturate(10), grayscale(0%); }
    100% { filter: hue-rotate(360deg), ;}
`

const SplashLogo = styled.img`
    margin-top: 10%;
    animation-name: ${HueRotate};
    animation-duration: ${props => props.randomSeconds}s;
    animation-iteration-count: infinite;
`



export default Landing;