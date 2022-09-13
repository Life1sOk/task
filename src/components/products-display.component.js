import React from "react";
import styled from 'styled-components';

import { useSelector } from "react-redux";
import { selectAll } from "../app/slices/current-product.slice";

// ---------- React Component -----//
import ProductLine from "./product-line.component";
import Checkbox from "./checkbox.component";

// ---------- Style Component -----//
const ProductsDisplayContainer = styled.table`
    border-collapse: collapse;
    text-align: center;

    td, th {
        border-bottom: 1px solid gray;
    }

    th {
        padding-bottom: 10px; 
    }
`;

//----------------------------------//

const ProductsDisplay = () => {
    const displayAll = useSelector(selectAll);
    const defaultValue = useSelector((state) => state.product.currentProduct)

    return (
        <ProductsDisplayContainer type='checkbox'>
            <tr>
                <th>
                    <Checkbox />
                </th>
                <th>Картинка</th>
                <th>Название</th>
                <th>Статус</th>
                <th>Цена</th>
                <th>X</th>
            </tr>
            {/* <ProductLine product={defaultValue} /> */}
            {
                displayAll[0] &&
                displayAll.map(product => <ProductLine key={product.id} product={product} />)
            }
        </ProductsDisplayContainer>

    )
}

export default ProductsDisplay;