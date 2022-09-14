import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addState } from "../../app/slices/current-product.slice";
import { TitleContainer, StateContainer } from './title.section.style';
import Button from "../../components/button/button.component";

const TitleSection = ({ id, state }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const stateChangeHandler = (event) => {
        dispatch(addState(event.target.value))
    }

    return (
        <TitleContainer>
            <Button onClick={() => navigate(-1)} type='nostyle' name='&#x2190;' />
            {
                !id ?
                    <h2>Добавить товар</h2> :
                    <h2>Товар id: {id}</h2>
            }
            {
                !state ?
                    <StateContainer>
                        <label htmlFor="cars">Статус:</label>

                        <select onChange={(e) => stateChangeHandler(e)} name="product-state" id="product-state">
                            <option value="активный">Активный</option>
                            <option value="архивный">Архивный</option>
                        </select>

                    </StateContainer> :
                    <StateContainer>
                        <span className="state-title">Статус:</span>
                        <span className="state">{state}</span>
                    </StateContainer>
            }
        </TitleContainer>
    )
}

export default TitleSection;