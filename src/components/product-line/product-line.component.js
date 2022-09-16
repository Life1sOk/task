import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { filterProducts, editState } from "../../app/slices/current-product.slice";
import { ProductLineContainer, Wrapper, ButtonsWrapper } from "./product-line.style";
import Button from "../button/button.component";


const ProductLine = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { name, state, media, id, priceAll, onePrice, cities } = product;

    const editStateHandler = () => {
        dispatch(editState(id))
        navigate(`edit/${id}`)
    }

    return (
        <ProductLineContainer>
            <Wrapper>
                <img alt={name} src={media[0]} />
            </Wrapper>
            <Wrapper>
                <Link to={`/${id}`}>{name}</Link>
            </Wrapper>
            <Wrapper>{state}</Wrapper>
            {
                !onePrice ?
                    <Wrapper>
                        {cities.map(item =>
                            <p key={cities.indexOf(item) + 777}>{item.name}: {item.price} &#8376;</p>
                        )}
                    </Wrapper>
                    :
                    <Wrapper>{priceAll} &#8376;</Wrapper>
            }
            <ButtonsWrapper>
                <Button type='nostyle' name='edit' onClick={editStateHandler} />
                <Button type='nostyle' name='x' onClick={() => dispatch(filterProducts(id))} />
            </ButtonsWrapper>
        </ProductLineContainer>
    )
}

export default ProductLine;