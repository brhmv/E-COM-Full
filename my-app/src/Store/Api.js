import { getProducts, getBagProducts, getOrders, getDeletedProduct, getEditedProduct, setSearchResults, setPostedProduct, updateQuantity, addOrder } from "./ShopSlice";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Unable to fetch products');
    }
};

//get all products
export const getProductsFetch = () => async dispatch => {
    try {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        console.log(data);
        dispatch(getProducts(data.products));
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

export const getBagProductsFetch = () => dispatch => {
    fetch('http://localhost:8080/my-bag')
        .then(res => res.json())
        .then(data => dispatch(getBagProducts(data)))
        .catch(err => console.log(err))
}


export const getOrdersFetch = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:8080/orders');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        dispatch(getOrders(data));
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

export function SendOrderFetch(obj) {
    return function (dispatch) {
        fetch('http://localhost:8080/add-orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.text())
            .then(data => dispatch(addOrder(data)))
    }

}

// export function fetchAddToOrders(obj) {
//     return function (dispatch) {
//         fetch('http://localhost:8080/add-orders', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(obj)
//         })
//             .then(res => res.text())
//             .then(data => dispatch(addOrder(data)))
//     }
// }

export function fetchAddToOrders(obj) {
    return function (dispatch) {
        fetch('http://localhost:8080/add-orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())  // Parse the response as JSON
            .then(data => dispatch(getOrders(data)))  // Assuming getOrders is the action creator for updating Orders in your Redux store
            .catch(error => console.error('Error adding order:', error));
    }
}

export const addOrderFetch = async (order) => {
    try {
        const response = await fetch('http://localhost:8080/add-orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data; // Assuming your API returns the updated orders array
    } catch (error) {
        console.error('Error adding order:', error);
        throw error;
    }
};



//////////////////////////////////////////////

export const deleteProductViaIdFetch = async (id, dispatch) => {
    try {
        const response = await fetch(`http://localhost:8080/delete-admin/${id}`, { method: 'DELETE' });
        const data = await response.json();

        dispatch(getDeletedProduct(data));

        await dispatch(getProductsFetch());
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Unable to delete product');
    }
};

export const updateProduct = async (productId, updatedFields, dispatch) => {
    try {
        const response = await fetch(`http://localhost:8080/change-admin/${productId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(updatedFields),
        });

        if (!response.ok) {
            throw new Error(`Failed to update product: ${response.statusText}`);
        }

        dispatch(getEditedProduct());
        dispatch(getProductsFetch());

    } catch (error) {
        console.error('Error updating product:', error);
    }
};

export function UpdateProductFetch(changedObject, newObject) {
    let obj = { ...changedObject, ...newObject }
    return function (dispatch) {
        fetch(`http://localhost:8080/change-admin/${changedObject.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.text())
            .then(data => dispatch(getEditedProduct(data)))
    }
}

export const SearchGoodsFetch = (searchValue) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8080/search-products/${searchValue}`);
        const data = await response.json();
        dispatch(setSearchResults(data));
    } catch (error) {
        console.error('Error searching products:', error);
    }
};

export const addProductFetch = async (newProduct, dispatch) => {
    try {
        const response = await fetch('http://localhost:8080/add-admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });

        if (!response.ok) {
            throw new Error('Failed to add product');
        }

        const data = await response.json();
        console.log(data);
        dispatch(setPostedProduct(data));

    } catch (error) {
        console.error('Error adding product:', error.message);
    }
};

export const updateQuantityFetch = createAsyncThunk(
    'products/updateQuantity',
    async ({ productId, quantity }, { dispatch }) => {
        try {
            dispatch(updateQuantity({ productId, quantity }));

            return { productId, quantity };
        } catch (error) {
            console.error('Error updating quantity:', error);
            throw new Error('Failed to update quantity');
        }
    }
);

export const removeFromCartFetch = async (productId, dispatch) => {
    try {
        const response = await fetch(`http://localhost:8080/delete-mybag/${productId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to remove product from cart');
        }

        dispatch(updateQuantity({ productId, quantity: -1 }));
    } catch (error) {
        console.error('Error removing product from cart:', error);
        throw new Error('Unable to remove product from cart');
    }
};