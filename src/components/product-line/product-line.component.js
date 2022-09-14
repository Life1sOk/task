import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { filterProducts } from "../../app/slices/current-product.slice";
import { ProductLineContainer, Wrapper } from "./product-line.style";
import Button from "../button/button.component";


const ProductLine = ({ product }) => {
    const dispatch = useDispatch();
    const { name, state, media, id, priceAll, onePrice, cities } = product;

    return (
        <ProductLineContainer>
            <Wrapper>
                <img alt={name} src={media[0]} />
            </Wrapper>
            <Wrapper>
                <Link to={`/edit/${id}`}>{name}</Link>
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
            <Button type='nostyle' name='x' onClick={() => dispatch(filterProducts(id))} />
        </ProductLineContainer>
    )
}

export default ProductLine;