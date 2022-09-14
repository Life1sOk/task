import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectAll } from "../../app/slices/current-product.slice";

import { ProductContainer } from './product-page.style';
import MediaDisplay from "../../components/media-display/media-display.component";
import TitleSection from "../../sections/title-section/title.section";
import ProductSection from "../../sections/product-section/product.section";
import ProductPriceSection from "../../sections/product-price-section/product-price.section";

const Product = () => {
    const { product } = useParams();
    const all = useSelector(selectAll);
    const [current] = useState([...all]);

    return (
        <>
            {
                current.map(item => item.id === Number(product) ?
                    <ProductContainer key={item.id}>
                        <TitleSection id={product} state={item.state} />
                        <ProductSection name={item.name} editor={item.editor} />
                        <MediaDisplay media={item.media} />
                        <ProductPriceSection item={item} />
                    </ProductContainer> : null
                )
            }
        </>
    )
}

export default Product;