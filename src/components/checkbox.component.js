import React from "react";
import styled from 'styled-components';

// ---------- Style Component -----//
const CheckboxDefault = styled.input`
    width: 20px;
    height: 20px;
`;

//----------------------------------//

const Checkbox = () => {
    return (
        <CheckboxDefault type='checkbox' />

    )
}

export default Checkbox;