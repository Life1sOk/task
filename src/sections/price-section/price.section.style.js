import styled from 'styled-components';

export const PriceContainer = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid grey;
    border-radius: 20px;
    margin-top: 20px; 
    padding: 10px;

    .input {
        display: relative;
        width: 150px;
        height: 40px;
        border: 1px solid grey;
        text-align: initial;
        font-size: 1rem;
        padding: 0 10px 0 10px;
    }
`;

export const PriceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: cetner;
    gap: 200px;
    margin-bottom: 20px;
`;

export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
`;

export const PriceTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: cetner;
    gap: 170px;
    margin-bottom: 20px;

    .city {
        width: 200px;
    }

    .price {
        width: 150px;
    }
`;