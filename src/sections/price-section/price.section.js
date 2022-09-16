import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCities, selectOnePrice, priceState, mainPrice } from "../../app/slices/current-product.slice";
import { PriceContainer, PriceWrapper, Checkbox, PriceTitle } from './price.section.style';
import PriceLine from "../../components/price-line/price-line.component";

const PriceSection = ({ editOnePrice, editPriceAll }) => {
    const dispatch = useDispatch();
    const allCities = useSelector(selectCities);
    const onePrice = useSelector(selectOnePrice);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [checkbox, setCheckbox] = useState(editOnePrice ? editOnePrice : null);

    useEffect(() => {
        dispatch(priceState(checkbox))
    }, [dispatch, checkbox])

    useEffect(() => {
        dispatch(mainPrice(currentPrice))
    }, [dispatch, currentPrice])

    return (
        <PriceContainer>
            <span>Цена:</span>
            <PriceWrapper>
                <Checkbox>
                    <input type='checkbox' defaultChecked={editOnePrice ? editOnePrice : null} onChange={(e) => setCheckbox(e.target.checked)} />
                    <p>Одна цена для всех городов</p>
                </Checkbox>
                <input className="input" type='number' min='1' defaultValue={editOnePrice ? editPriceAll : null} placeholder='5000 &#8376;' step='10'
                    onChange={(e) => setCurrentPrice(e.target.value)} disabled={!onePrice ? true : false} />
            </PriceWrapper>
            {
                !onePrice ?
                    <>
                        <PriceTitle>
                            <span className="city">Город</span>
                            <span className="price">Цена</span>
                        </PriceTitle>
                        {
                            allCities.map(city => <PriceLine key={allCities.indexOf(city) + 200} city={city} />)
                        }
                    </> : null
            }
        </PriceContainer>
    )
}

export default PriceSection;