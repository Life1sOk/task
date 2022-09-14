import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { addEditor, selectEditor } from "../../app/slices/current-product.slice";
import { EditorDefault } from './editor.style';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const Editor = ({ type, readOnly, editor }) => {
    const dispatch = useDispatch();
    const defaultValue = useSelector(selectEditor);
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        dispatch(addEditor(value))
    }, [dispatch, value])

    return (
        <EditorDefault>
            <ReactQuill theme={type} readOnly={readOnly} value={!editor ? value : editor} onChange={setValue} />
        </EditorDefault>
    );
}

export default Editor;