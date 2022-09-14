import React from "react";
import { useDispatch } from "react-redux";

import { addName } from "../../app/slices/current-product.slice";
import { ProductWrapper, NameWrapper, ProductSectionContainer } from './product.section.style';
import Editor from "../../components/editor/editor.component";

const ProductSection = ({ name, editor }) => {
    const dispatch = useDispatch();

    return (
        <ProductSectionContainer>
            <NameWrapper>
                <span>Название:</span>
                {
                    !name ?
                        <input type='text' name="product-name" id="product-name" min='2' placeholder="Название" onChange={(e) => dispatch(addName(e.target.value))} /> :
                        <p className="product-name">{name}</p>
                }
            </NameWrapper>
            <ProductWrapper>
                <span>Описание:</span>
                {
                    !editor ?
                        <Editor type='snow' readOnly={false} /> :
                        <Editor type='bubble' readOnly={true} editor={editor} />
                }
            </ProductWrapper>
        </ProductSectionContainer>
    )
}

export default ProductSection;