import React, { useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { addMedia, removeMedia } from "../../app/slices/current-product.slice";
import { InputFile, ImgFileContainer, ImgFile, ImgFileDelete } from './media-file.style';


const MediaFile = ({ item, id }) => {
    const dispatch = useDispatch();
    const [url, setUrl] = useState(item);
    const files = useRef();

    const fileHandler = (file) => {
        const currentFile = file.current.files[0];

        if (currentFile) {
            const reader = new FileReader();

            reader.addEventListener('load', function () {
                setUrl(this.result);
                dispatch(addMedia(this.result));
            })

            reader.readAsDataURL(currentFile);
        }
    }

    const deleteHandler = () => {
        dispatch(removeMedia(id))
    }

    return (
        <>
            {
                !item ?
                    <InputFile htmlFor="inpFile">
                        <div className="one-line" />
                        <div className="two-line" />
                        <input type="file"
                            ref={files}
                            id="inpFile"
                            onChange={() => fileHandler(files)}
                            accept="image/png, image/jpeg"
                        />
                    </InputFile>
                    :
                    <ImgFileContainer>
                        <ImgFile alt="img" src={url} className='file-one' />
                        <ImgFileDelete onClick={deleteHandler}>X</ImgFileDelete>
                    </ImgFileContainer>
            }

        </>
    )
}

export default MediaFile;