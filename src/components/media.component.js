import React, { useState } from "react";
import styled from 'styled-components';

import MediaFile from "./media-file.component";

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
//----------------------------------//

const Media = () => {
    const [nextFile, setNextFile] = useState([1]);

    return (
        <MediaContainer>
            <span>Media</span>
            <ImgContainer>
                {
                    nextFile.map(item => <MediaFile key={item} setNextFile={setNextFile} nextFile={nextFile} item={item} />)
                }
            </ImgContainer>
        </MediaContainer>
    )
}

export default Media;