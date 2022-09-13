import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ---------- React Component -----//
import Checkbox from "./checkbox.component";
import Button from "./button.component";

// ---------- Style Component -----//
const ProductLineContainer = styled.tr`
    height: 80px;

    img {
        width: 100px;
    }
`;

//----------------------------------//

const ProductLine = ({ product }) => {
    const { name, state, media, id } = product;

    return (
        <>
            <ProductLineContainer>
                <td>
                    <Checkbox />
                </td>
                <td>
                    <img alt={name} src={media[0]} />
                </td>
                <td>
                    <Link to={`/edit/${id}`}>
                        {name}
                    </Link>
                </td>
                <td>
                    <span>{state}</span>
                </td>
                <td>qwr</td>
                <td>
                    <Button type='nostyle' name='x' />
                </td>
            </ProductLineContainer>
        </>

    )
}

export default ProductLine;