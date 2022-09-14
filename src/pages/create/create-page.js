import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToAll, selectName, selectMedia, selectOnePrice, selectPriceAll, selectCities, refreshState } from "../../app/slices/current-product.slice";

import { CreateContainer, FooterContainer } from './create-page.style';
import Button from "../../components/button/button.component";
import Media from "../../components/media/media.component";
import TitleSection from "../../sections/title-section/title.section";
import ProductSection from "../../sections/product-section/product.section";
import PriceSection from "../../sections/price-section/price.section";

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkName = useSelector(selectName);
    const checkMedia = useSelector(selectMedia);
    const checkPriceState = useSelector(selectOnePrice);
    const checkPrice = useSelector(selectPriceAll);
    const checkCities = useSelector(selectCities);

    const checkAllHandler = () => {
        if (checkName == null) {
            alert('Название не заполнино!')
            return;
        } else if (!checkMedia[0]) {
            alert('Нету картинки!');
            return;
        } else if (checkPriceState && checkPrice <= 0) {
            alert('Укажите цену');
            return;
        } else if (!checkPriceState) {
            const check = [...checkCities];

            for (let i = 0; i < check.length; i++) {
                if (check[i].price <= 0) {
                    alert('Укажите цену для всех городов')
                    return
                }
            }
        }

        dispatch(addToAll());
        dispatch(refreshState());
        navigate(-1);
    }

    return (
        <CreateContainer>
            <TitleSection />
            <ProductSection />
            <Media />
            <PriceSection />
            <FooterContainer>
                <Link to='/'>
                    <Button type='nostyle' name='Отмена' onClick={() => dispatch(refreshState())} />
                </Link>
                <Button name='Сохранить' onClick={checkAllHandler} />
            </FooterContainer>
        </CreateContainer>
    )
}

export default Create;