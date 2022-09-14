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
    flex-direction: column;
    justify-content: center;
    align-items: cetner;
    margin-bottom: 20px;
`;

export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-left: 20px;

    span {
        padding: initial;
    }
`;