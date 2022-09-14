import React from "react";

import { ProductsDisplayContainer, Title } from './products-display.style';
// ---------- React Component -----//
import ProductLine from "../product-line/product-line.component";

const ProductsDisplay = ({ currentProducts, firstContentIndex, lastContentIndex }) => {

    return (
        <>
            <ProductsDisplayContainer>
                <Title>Картинка</Title>
                <Title>Название</Title>
                <Title>Статус</Title>
                <Title>Цена</Title>
                <h4>X</h4>
            </ProductsDisplayContainer>
            {
                currentProducts[0] &&
                currentProducts.slice(firstContentIndex, lastContentIndex).map(product => <ProductLine key={product.id} product={product} />)
            }
        </>

    )
}

export default ProductsDisplay;