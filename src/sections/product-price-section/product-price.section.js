import React from "react";
import { useSelector } from "react-redux";

import { selectOnePrice } from "../../app/slices/current-product.slice";
import { PriceContainer, PriceWrapper, Checkbox } from './product-price.section.style';
import PriceLine from "../../components/price-line/price-line.component";

const ProductPriceSection = ({ item }) => {
    const { priceAll, cities } = item;
    const oneCity = useSelector(selectOnePrice);

    console.log(item, 'item')

    return (
        <PriceContainer>
            <span>Цена:</span>
            <PriceWrapper>
                {
                    !oneCity ?
                        <Checkbox>
                            <p>Одна цена для всех городов:</p>
                            <span className="product-price-span">{priceAll} &#8376;</span>
                        </Checkbox>
                        :
                        cities.map(city => <PriceLine key={cities.indexOf(city) + 300} display city={city} />)
                }
            </PriceWrapper>
        </PriceContainer>
    )
}

export default ProductPriceSection;