import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import { selectAll } from '../../app/slices/current-product.slice';
import { ProductsContainer, Title, Footer } from './products-page.style';
import usePagination from "../../hook/usePagination";
// ---------- React Component -----//
import Button from "../../components/button/button.component";
import Search from "../../components/search/search.component";
import ProductsDisplay from "../../components/products-display/products-display.component";


const Products = () => {
    const countProducts = useSelector(selectAll)
    const [searchField, setSearchField] = useState('');
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 5,
        count: countProducts.length,
    });

    const onSearchChange = (event) => {
        const searchFieldOn = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldOn);
    };

    const filterList = countProducts.filter((user) => {
        return user.name.toLocaleLowerCase().includes(searchField);
    });


    return (
        <ProductsContainer>
            <Title>
                <h2>Товары: {countProducts.length}</h2>
                <Link to='/create'>
                    <Button name='Add' />
                </Link>
            </Title>
            <Search searchChange={onSearchChange} />
            <ProductsDisplay currentProducts={filterList} firstContentIndex={firstContentIndex} lastContentIndex={lastContentIndex} />
            <Footer>
                <Button onClick={prevPage} type='nostyle' name='&larr;' />
                <div>
                    {[...Array(totalPages).keys()].map((el) => (
                        <Button type='nostyle' onClick={() => setPage(el + 1)} key={el} name={el + 1} />
                    ))}
                </div>
                <Button onClick={nextPage} type='nostyle' name='&rarr;' />
            </Footer>
        </ProductsContainer>
    )
}

export default Products;