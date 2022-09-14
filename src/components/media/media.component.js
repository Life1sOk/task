import React, { useState } from "react";

import { MediaContainer, ImgContainer } from './media.style';
import MediaFile from "../media-file/media-file.component";

const Media = () => {
    const [nextFile, setNextFile] = useState([0]);

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