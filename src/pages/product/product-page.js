import React from "react";
import styled from 'styled-components';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectName, selectState, addToAll } from "../../app/slices/current-product.slice";

// ---------- React Component -----//
import Editor from "../../components/editor.component";
import Button from "../../components/button.component";
import MediaDisplay from "../../components/media-display.component";

// ---------- Style Component -----//
const ProductContainer = styled.div`
    width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: lightgreen;

    span {
        padding: 0 0 10px 10px;
        font-size: 19px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    #product-name {
        font-size: 1.5rem;
    }
`;

const ProductSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: cetner;
    gap: 20px;
    max-width: 300px;
`;

const ProductWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const PriceContainer = styled.div`
    margin: 15px 15px 0 15px;
    display: flex;
    justify-content: space-between;
`;

const StateContainer = styled.div`
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

//----------------------------------//

const Product = () => {
    const { product } = useParams();
    const navigate = useNavigate();
    const currentName = useSelector(selectName);
    const currentState = useSelector(selectState);

    return (
        <ProductContainer>
            <Title>
                <Button onClick={() => navigate(-1)} type='nostyle' name='&#x2190;' />
                <h2>Товар id: {product}</h2>
                <StateContainer>
                    <span className="state-title">Статус:</span>
                    <span className="state">{currentState}</span>
                </StateContainer>
            </Title>
            <ProductSection>
                <NameWrapper>
                    <span>Название:</span>
                    <span id="product-name">{currentName}</span>
                </NameWrapper>
                <ProductWrapper>
                    <span>Описание:</span>
                    <Editor type='bubble' readOnly={true} />
                </ProductWrapper>
            </ProductSection>
            <MediaDisplay />
            <PriceContainer>
                <Button type='nostyle' name='Отмена' />
                <Button name='Сохранить' />
            </PriceContainer>
        </ProductContainer>
    )
}

export default Product;