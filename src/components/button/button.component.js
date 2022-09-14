import React from "react";

import { ButtonDefault, ButtonRemove } from './button.style';

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