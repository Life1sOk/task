import styled from 'styled-components';

export const ProductSectionContainer = styled.div`
    max-width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: cetner;
    gap: 20px;
`;

export const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    label {
        padding: 0 0 10px 10px;
        font-size: 19px;
    }

    .product-name {
        width: 200px;
        height: 40px;
        background-color: white;
        padding: 10px;
    }

    #product-name {
        width: 300px;
        height: 40px;
        border: 0px solid transparent;
        text-align: initial;
        font-size: 1rem;
        padding: 0 10px 0 10px;
    }
`;

export const ProductWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;