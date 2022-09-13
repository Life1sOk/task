import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addName, addState, addToAll, selectName, selectMedia } from "../../app/slices/current-product.slice";

// ---------- React Component -----//
import Button from "../../components/button.component";
import Editor from "../../components/editor.component";
import Media from "../../components/media.component";

// ---------- Style Component -----//
const CreateContainer = styled.div`
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

    label {
        padding: 0 0 10px 10px;
        font-size: 19px;
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

const ProductSection = styled.div`
    max-width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: cetner;
    gap: 20px;
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

    label {
        margin-right: 8px;
    }

    select {
        width: 100px;
        font-size: 1rem;
    }
`;

//----------------------------------//

const Create = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const checkName = useSelector(selectName);
    const checkMedia = useSelector(selectMedia);

    const stateChangeHandler = (event) => {
        dispatch(addState(event.target.value))
    }

    const checkAllHandler = () => {
        if (checkName === '') {
            alert('Название не заполнино!')
            return;
        } else if (!checkMedia[0]) {
            alert('Нету картинки!');
            return;
        }

        dispatch(addToAll())
    }

    return (
        <CreateContainer>
            <Title>
                <Button onClick={() => navigate(-1)} type='nostyle' name='&#x2190;' />
                <h2>Добавить товар</h2>
                <StateContainer>
                    <label for="cars">Статус:</label>

                    <select onChange={(e) => stateChangeHandler(e)} name="product-state" id="product-state">
                        <option value="активный">Активный</option>
                        <option value="архивный">Архивный</option>
                    </select>
                </StateContainer>
            </Title>
            <ProductSection>
                <NameWrapper>
                    <span>Название:</span>
                    <input type='text' name="product-name" id="product-name" min='2' placeholder="Название" onChange={(e) => dispatch(addName(e.target.value))} />
                </NameWrapper>
                <ProductWrapper>
                    <span>Описание:</span>
                    <Editor type='snow' readOnly={false} />
                </ProductWrapper>
            </ProductSection>
            <Media />
            <PriceContainer>
                <Link to='/'>
                    <Button type='nostyle' name='Отмена' />
                </Link>
                <Button name='Сохранить' onClick={checkAllHandler} />
            </PriceContainer>
        </CreateContainer>
    )
}

export default Create;