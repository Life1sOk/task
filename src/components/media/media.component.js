import React from "react";
import { useSelector } from "react-redux";

import { selectMedia } from '../../app/slices/current-product.slice';
import { MediaContainer, ImgContainer } from './media.style';
import MediaFile from "../media-file/media-file.component";

const Media = () => {
    const files = useSelector(selectMedia);

    return (
        <MediaContainer>
            <span>Media</span>
            <ImgContainer>
                {files[0] ?
                    files.map(item => <MediaFile key={item} item={item} id={files.indexOf(item)} />) : null
                }
                <MediaFile />
            </ImgContainer>
        </MediaContainer>
    )
}

export default Media;