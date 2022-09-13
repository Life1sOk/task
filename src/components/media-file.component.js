import React, { useRef, useState } from "react";
import styled from 'styled-components';

import { useDispatch } from "react-redux";
import { addMedia } from "../app/slices/current-product.slice";

// ---------- Style Component -----//
const ImgFile = styled.img`
    width: 200px;
    height: 200px;
`;

const InputFile = styled.label`
    position: relative;
    cursor: pointer;
    width: 200px;
    height: 200px;
    border: 2px solid grey;
    border-style: dotted;

    .one-line {
        position: absolute;
        top: 20%;
        left: 49%;
        height: 60%;
        border: 1px solid grey;
    }

    .two-line {
        position: absolute;
        top: 49%;
        left: 20%;
        width: 60%;
        border: 1px solid grey;
    }
    
    input {
        display: none;
    }
`;

//----------------------------------//

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

    return (
        <>
            {
                addImg ?
                    <InputFile for="inpFile">
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
                    <ImgFile alt="img" src={url} className='file-one' />
            }
        </>
    )
}

export default MediaFile;