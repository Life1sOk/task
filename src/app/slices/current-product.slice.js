import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    currentProduct: {
        id: 222,
        name: '',
        editor: 'Some default content',
        media: [],
        state: 'активный',
    }
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addName: (state, { payload }) => {
            state.currentProduct.name = payload;
        },
        addEditor: (state, { payload }) => {
            state.currentProduct.editor = payload;
        },
        addMedia: (state, { payload }) => {
            state.currentProduct.media.push(payload);
        },
        addState: (state, { payload }) => {
            state.currentProduct.state = payload;
        },
        addToAll: (state) => {
            state.currentProduct.id = state.currentProduct.id + 1;
            state.products.push(state.currentProduct);
        }
    }
});

export const selectName = (state) => state.product.currentProduct.name;
export const selectEditor = (state) => state.product.currentProduct.editor;
export const selectMedia = (state) => state.product.currentProduct.media;
export const selectState = (state) => state.product.currentProduct.state;
export const selectAll = (state) => state.product.products;

export const { addEditor, addMedia, addName, addState, addToAll } = productSlice.actions;

export default productSlice.reducer;