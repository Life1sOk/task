import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { refreshState, selectCurrentProduct, editProducts } from "../../app/slices/current-product.slice";

import { EditContainer, FooterContainer } from './edit-page.style';
import Button from "../../components/button/button.component";
import Media from "../../components/media/media.component";
import TitleSection from "../../sections/title-section/title.section";
import ProductSection from "../../sections/product-section/product.section";
import PriceSection from "../../sections/price-section/price.section";

const Edit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { product } = useParams();
    const [currentProduct] = useState(useSelector(selectCurrentProduct))
    const { name, media, state, onePrice, priceAll, cities, id } = currentProduct;

    const checkAllHandler = () => {

        if (name == null) {
            alert('Название не заполнино!')
            return;
        } else if (!media[0]) {
            alert('Нету картинки!');
            return;
        } else if (onePrice && priceAll < 0) {
            alert('Укажите цену');
            return;
        } else if (!onePrice) {
            const check = [...cities];

            for (let i = 0; i < check.length; i++) {
                if (check[i].price < 0) {
                    alert('Укажите цену для всех городов')
                    return
                }
            }
        }

        navigate('/');
        dispatch(editProducts(id));
        dispatch(refreshState());
    }

    return (
        <EditContainer>
            <TitleSection edit={product} editState={state} />
            <ProductSection editName={name} />
            <Media editMedia={media} />
            <PriceSection editOnePrice={onePrice} editPriceAll={priceAll} editCities={cities} />
            <FooterContainer>
                <Link to='/'>
                    <Button type='nostyle' name='Отмена' onClick={() => dispatch(refreshState())} />
                </Link>
                <Button name='Сохранить' onClick={checkAllHandler} />
            </FooterContainer>
        </EditContainer>
    )
}

export default Edit;