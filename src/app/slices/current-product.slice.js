import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 211,
            name: 'Дыня',
            editor: 'Большая дыня',
            media: ['https://images.prom.ua/201190385_dynya--polza.jpg'],
            state: 'активный',
            onePrice: true,
            priceAll: 2222,
            cities: [
                { "id": 1, "name": "Алматы", price: 0 },
                { "id": 2, "name": "Актобе", price: 0 },
                { "id": 3, "name": "Астана", price: 0 },
                { "id": 4, "name": "Павлодар", price: 0 },
            ],
        },
        {
            id: 212,
            name: 'Арбуз',
            editor: 'Большой арбуз',
            media: ['https://vesti.ua/wp-content/uploads/2020/07/arbuz-1.jpg'],
            state: 'активный',
            onePrice: true,
            priceAll: 3333,
            cities: [
                { "id": 1, "name": "Алматы", price: 0 },
                { "id": 2, "name": "Актобе", price: 0 },
                { "id": 3, "name": "Астана", price: 0 },
                { "id": 4, "name": "Павлодар", price: 0 },
            ],
        },
        {
            id: 213,
            name: 'Малина',
            editor: 'Большая малина',
            media: ['https://zdravopedia.sk/assets/images/Ovocie/maliny.jpg'],
            state: 'активный',
            onePrice: true,
            priceAll: 4444,
            cities: [
                { "id": 1, "name": "Алматы", price: 0 },
                { "id": 2, "name": "Актобе", price: 0 },
                { "id": 3, "name": "Астана", price: 0 },
                { "id": 4, "name": "Павлодар", price: 0 },
            ],
        },
        {
            id: 214,
            name: 'Кокос',
            editor: 'Большой кокос',
            media: ['https://1884403144.rsc.cdn77.org/foto/kokos-jidlo-potraviny/Zml0LWluLzEwMzB4OTk5OS9maWx0ZXJzOnF1YWxpdHkoODUpOm5vX3Vwc2NhbGUoKS9pbWc/3182899.jpg?v=0&st=VXJcz_6dZjEGRf_rKEYAdfUEbwGocRGkQdU8UJrDJBc&ts=1600812000&e=0'],
            state: 'активный',
            onePrice: true,
            priceAll: 5555,
            cities: [
                { "id": 1, "name": "Алматы", price: 0 },
                { "id": 2, "name": "Актобе", price: 0 },
                { "id": 3, "name": "Астана", price: 0 },
                { "id": 4, "name": "Павлодар", price: 0 },
            ],
        },
    ],
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
            state.currentProduct.id = state.currentProduct.id + 1;
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
            state.products.push(state.currentProduct);
        },
        refreshState: (state) => {
            state.currentProduct = {
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

export const selectName = (state) => state.product.currentProduct.name;
export const selectEditor = (state) => state.product.currentProduct.editor;
export const selectMedia = (state) => state.product.currentProduct.media;
export const selectState = (state) => state.product.currentProduct.state;
export const selectAll = (state) => state.product.products;
export const selectCities = (state) => state.product.currentProduct.cities;
export const selectPriceAll = (state) => state.product.currentProduct.priceAll;
export const selectOnePrice = (state) => state.product.currentProduct.onePrice;

export const { addEditor, addMedia, addName, addState, addToAll, refreshState, priceState, mainPrice, priceCity, filterProducts } = productSlice.actions;

export default productSlice.reducer;