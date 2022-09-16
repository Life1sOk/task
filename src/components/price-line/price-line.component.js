import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { priceCity } from '../../app/slices/current-product.slice';
import { PriceLineContainer } from './price-line.style';

const PriceLine = ({ city, display }) => {
    const { id, name } = city;
    const dispatch = useDispatch();
    const [currentCity, setCurrentCity] = useState({ id, price: null });

    useEffect(() => {
        dispatch(priceCity(currentCity))
    }, [dispatch, currentCity])

    return (
        <PriceLineContainer>
            <span className="city">{name}:</span>
            {
                display ?
                    <span className="price">{city.price} &#8376;</span>
                    :
                    <input className="input-price" type='number' min='1' defaultValue={city.price} placeholder='5000 &#8376;' step='10'
                        onChange={(e) => setCurrentCity({ id, price: Number(e.target.value) })} />

            }
        </PriceLineContainer>
    )
}

export default PriceLine;