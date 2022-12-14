import styled from 'styled-components';

export const ProductLineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid grey;

    img {
        width: 100px;
        height: auto;
    }
`;

export const Wrapper = styled.div`
    width: 20%;
    text-align: center;

    p {
       text-align: left;
       padding-bottom: 10px;
       margin-left: 20px;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
