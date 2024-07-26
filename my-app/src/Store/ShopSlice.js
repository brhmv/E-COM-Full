import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, addProductFetch, addOrderFetch } from '../Store/Api';

export const fetchProductsAsync = createAsyncThunk('products/fetchProducts', async () => {
    return fetchProducts();
});

export const addProductAsync = createAsyncThunk(
    'products/addProduct',
    async (newProduct) => {
        const response = await addProductFetch(newProduct);
        return response;
    }
);

export const addOrderAsync = createAsyncThunk(
    'shop/addOrder',
    async (order) => {
        const response = await addOrderFetch(order);
        return response;
    }
);

const ShopSlice = createSlice({
    name: 'shop',
    initialState: {
        allProducts: [],
        BagProducts: [],
        Orders: [],
        deletedProductFromBag: null,
        deletedProductFromAll: null,
        editedProduct: null,
        postedProduct: null,
        searchResults: [],
        status: 'idle',
        error: null,
        addedOrder: null
    },
    reducers: {
        getProducts: (state, action) => {
            return { ...state, allProducts: action.payload };
        },

        getBagProducts: (state, action) => {
            return { ...state, BagProducts: action.payload };
        },

        getOrders: (state, action) => {
            return { ...state, Orders: action.payload };
        },


        getDeletedProduct: (state, action) => {
            return { ...state, deletedProductFromAll: action.payload };
        },

        getEditedProduct: (state, action) => {
            return { ...state, editedProduct: action.payload };
        },

        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },

        setPostedProduct: (state, action) => {
            state.postedProduct = action.payload;
        },

        addToCart: (state, action) => {
            const productToAdd = action.payload;
            const existingProduct = state.BagProducts.find(item => item.id === productToAdd.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.BagProducts.push({ ...productToAdd, quantity: 1 });
            }
            localStorage.setItem('BagProducts', JSON.stringify(state.BagProducts));

        },

        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const productToUpdate = state.BagProducts.find(item => item.id === productId);

            if (productToUpdate) {
                productToUpdate.quantity += quantity;
            }
            localStorage.setItem('BagProducts', JSON.stringify(state.BagProducts));
        },

        removeFromCart: (state, action) => {
            const productId = action.payload;
            const index = state.BagProducts.findIndex((item) => item.id === productId);

            if (index !== -1) {
                state.BagProducts.splice(index, 1);
            }
        },

        // use this
        addOrder: (state, action) => {
            return {
                ...state,
                Orders: action.payload,
                addedOrder: action.payload[action.payload.length - 1],
            };
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allProducts = action.payload;
            })
            .addCase(fetchProductsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const {
    getProducts,
    getBagProducts,
    getOrders,
    getDeletedProduct,
    getEditedProduct,
    setSearchResults,
    setPostedProduct,
    addToCart,
    updateQuantity,
    removeFromCart,
    addOrder,
    addedOrder,
} = ShopSlice.actions;

export default ShopSlice.reducer;