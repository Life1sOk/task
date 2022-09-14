import React from "react";

import { SearchDefault } from './search.style';

const Search = ({ searchChange }) => {

    return (
        <SearchDefault type='search' placeholder="Search Product" onChange={(e) => searchChange(e)} />
    )
}

export default Search;