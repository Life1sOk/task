import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    currentProduct: {
        id: 222,
        name: null,
        editor: '',
        media: [],
        state: 'активный',
        onePrice: false,
        priceAll: 0,
        cities: [
            { "id": 1, "name": "Алматы", price: 0 },
            { "id": 2, "name": "Актобе", price: 0 },
            { "id": 3, "name": "Астана", price: 0 },
            { "id": 4, "name": "Павлодар", price: 0 },
        ],
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
        removeMedia: (state, { payload }) => {
            state.currentProduct.media =
                state.currentProduct.media.filter(item =>
                    !(state.currentProduct.media.indexOf(item) === payload))
        },
        addState: (state, { payload }) => {
            state.currentProduct.state = payload;
        },
        addToAll: (state) => {
            state.products.push(state.currentProduct);
        },
        editProducts: (state, { payload }) => {
            state.products = state.products.map(product => product.id === payload ?
                product = state.currentProduct : product
            )
        },
        refreshState: (state, { payload }) => {
            state.currentProduct = {
                id: !payload ? state.currentProduct.id : state.currentProduct.id + 1,
                name: null,
                editor: '',
                media: [],
                state: 'активный',
                onePrice: false,
                priceAll: 0,
                cities: [
                    { "id": 1, "name": "Алматы", price: 0 },
                    { "id": 2, "name": "Актобе", price: 0 },
                    { "id": 3, "name": "Астана", price: 0 },
                    { "id": 4, "name": "Павлодар", price: 0 },
                ],
            }
        },
        editState: (state, { payload }) => {
            state.products.map(item => item.id === payload ? state.currentProduct = { ...item, id: 222 } : null);
        },
        priceState: (state, { payload }) => {
            state.currentProduct.onePrice = payload;
        },
        mainPrice: (state, { payload }) => {
            state.currentProduct.priceAll = payload;
        },
        priceCity: (state, { payload }) => {
            state.currentProduct.cities.forEach(city => {
                if (city.id === payload.id) {
                    city.price = payload.price;
                }
            })
        },
        filterProducts: (state, { payload }) => {
            state.products = state.products.filter(item => !(item.id === payload));
        }
    }
});

export const selectCurrentProduct = (state) => state.product.currentProduct;
export const selectName = (state) => state.product.currentProduct.name;
export const selectEditor = (state) => state.product.currentProduct.editor;
export const selectMedia = (state) => state.product.currentProduct.media;
export const selectState = (state) => state.product.currentProduct.state;
export const selectCities = (state) => state.product.currentProduct.cities;
export const selectPriceAll = (state) => state.product.currentProduct.priceAll;
export const selectOnePrice = (state) => state.product.currentProduct.onePrice;
export const selectAll = (state) => state.product.products;

export const { addEditor, addMedia, addName, addState, addToAll, refreshState, priceState, mainPrice, priceCity, filterProducts, editState, removeMedia, editProducts } = productSlice.actions;

export default productSlice.reducer;