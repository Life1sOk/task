import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { addEditor, selectEditor } from "../app/slices/current-product.slice";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

// ---------- Style Component -----//
const EditorDefault = styled.div`
    background-color: white;
    width: 100%;

    .ql-editor {
        min-height: 222px;
    }
`;
//----------------------------------//

const Editor = ({ type, readOnly }) => {
    const dispatch = useDispatch();
    const defaultValue = useSelector(selectEditor);
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        dispatch(addEditor(value))
    }, [dispatch, value])

    return (
        <EditorDefault>
            <ReactQuill theme={type} readOnly={readOnly} value={value} onChange={setValue} />
        </EditorDefault>
    );
}

export default Editor;