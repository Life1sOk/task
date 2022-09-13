import React, { useState } from "react";
import styled from 'styled-components';

import { useSelector } from "react-redux";
import { selectMedia } from "../app/slices/current-product.slice";

// ---------- Style Component -----//
const MediaContainer = styled.div`
    width: 100%;
    background-color: white;
    margin-top: 20px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ImgContainer = styled.div`
    width: 100%;
    background-color: lightblue;
    padding-left: 5%;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`;

const ImgFile = styled.img`
    width: 200px;
    height: 200px;
`;
//----------------------------------//

const MediaDisplay = () => {
    const allToDisplay = useSelector(selectMedia);

    return (
        <MediaContainer>
            <span>Media</span>
            <ImgContainer>
                {allToDisplay[0] &&
                    allToDisplay.map(item => <ImgFile alt="img" src={item} className='file-one' />)
                }
            </ImgContainer>
        </MediaContainer>
    )
}

export default MediaDisplay;