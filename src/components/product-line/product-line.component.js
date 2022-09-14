import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { filterProducts } from "../../app/slices/current-product.slice";
import { ProductLineContainer, Wrapper } from "./product-line.style";
import Button from "../button/button.component";


const ProductLine = ({ product }) => {
    const dispatch = useDispatch();
    const { name, state, media, id } = product;

    return (
        <ProductLineContainer>
            <Wrapper>
                <img alt={name} src={media[0]} />
            </Wrapper>
            <Wrapper>
                <Link to={`/edit/${id}`}>{name}</Link>
            </Wrapper>
            <Wrapper>{state}</Wrapper>
            <Wrapper>qwr</Wrapper>
            <Button type='nostyle' name='x' onClick={() => dispatch(filterProducts(id))} />
        </ProductLineContainer>
    )
}

export default ProductLine;