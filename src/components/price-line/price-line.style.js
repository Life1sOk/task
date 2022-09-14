import styled from 'styled-components';

export const PriceLineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: cetner;
    gap: 170px;
    margin-bottom: 15px;
    
    .city {
        width: 200px;
        padding: initial;
        margin-left: 57px;
        display: flex;
        align-items: center;
    }

    .price {
        width: 200px;
    }

    .input-price {
        height: 40px;
        border: 1px solid grey;
        text-align: initial;
        font-size: 1rem;
        padding: 0 10px 0 10px;
    }
`;