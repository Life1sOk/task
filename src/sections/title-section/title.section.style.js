import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const StateContainer = styled.div`
    padding: 20px;
    margin-left: auto;
    background-color: white;
    border-radius: 20px;

    .state-title {
        margin-right: 8px;
    }

    .state {
        width: 100px;
        font-size: 1.3rem;
    }
`;