import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ---------- React Component -----//
import Button from "../../components/button.component";
import Search from "../../components/search.component";
import ProductsDisplay from "../../components/products-display.component";

// ---------- Style Component -----//
const ProductsContainer = styled.div`
    width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: lightblue;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

//----------------------------------//

const Products = () => {
    return (
        <ProductsContainer>
            <Title>
                <h2>Товары: 10</h2>
                <Link to='/create'>
                    <Button name='Add' />
                </Link>
            </Title>
            <Search />
            <ProductsDisplay />
            <Footer>
                <span>Prev</span>
                <span>1, 2, 3</span>
                <span>Next</span>
            </Footer>
        </ProductsContainer>
    )
}

export default Products;