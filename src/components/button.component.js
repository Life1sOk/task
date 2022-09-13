import React from "react";
import styled from 'styled-components';

// ---------- Style Component -----//
const ButtonDefault = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 30px;
    background-color: lightgreen;
    cursor: pointer;
`;

const ButtonRemove = styled.button`
    padding: 5px;    
`;

//----------------------------------//

const Button = ({ type, name, ...others }) => {
    return (
        <>
            {
                type === 'nostyle' ?
                    <ButtonRemove {...others}>{name}</ButtonRemove> :
                    <ButtonDefault {...others}>{name}</ButtonDefault>
            }
        </>
    )
}

export default Button;