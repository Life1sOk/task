import React from "react";
import styled from 'styled-components';

// ---------- Style Component -----//
const SearchDefault = styled.input`
    width: 100%;
    height: 40px;
    padding-left: 25px;
    border: 0px solid transparent;
    text-align: initial;
`;

//----------------------------------//

const Search = () => {
    return (
        <SearchDefault type='search' placeholder="Search Product" />

    )
}

export default Search;