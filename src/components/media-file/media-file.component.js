import React, { useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { addMedia } from "../../app/slices/current-product.slice";
import { InputFile, ImgFileContainer, ImgFile, ImgFileDelete } from './media-file.style';


const MediaFile = ({ setNextFile, nextFile, item }) => {
    const dispatch = useDispatch();
    const [addImg, setAddImg] = useState(true);
    const [url, setUrl] = useState('');
    const files = useRef();

    const fileHandler = (file) => {
        const currentFile = file.current.files[0];

        if (currentFile) {
            const reader = new FileReader();

            reader.addEventListener('load', function () {
                setAddImg(!addImg);
                setUrl(this.result);
                dispatch(addMedia(this.result));
                let newOne = [...nextFile, item + 1];
                setNextFile(newOne);
            })

            reader.readAsDataURL(currentFile);
        }
    }

    const deleteHandler = () => {
        const all = [...nextFile];
        all.shift();

        setNextFile(all)
    }

    return (
        <>
            {
                addImg ?
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