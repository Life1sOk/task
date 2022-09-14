import React from "react";

import { MediaContainer, ImgContainer, ImgFile } from './media-display.style';

const MediaDisplay = ({ media }) => {

    return (
        <MediaContainer>
            <span>Media</span>
            <ImgContainer>
                {media[0] &&
                    media.map(item => <ImgFile key={media.indexOf(item) + 100} alt="img" src={item} className='file-one' />)
                }
            </ImgContainer>
        </MediaContainer>
    )
}

export default MediaDisplay;