import styled from 'styled-components';

export const ImgFileContainer = styled.div`
    position: relative;
`;

export const ImgFileDelete = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: red;
`;

export const ImgFile = styled.img`
    width: auto;
    height: 200px;
`;

export const InputFile = styled.label`
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