import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantityFetch, fetchAddToOrders, getOrdersFetch } from '../../Store/Api';
import remove_icon from '../Assets/cart_cross_icon.png';
import './CartItems.css';
import { removeFromCart, updateQuantity } from '../../Store/ShopSlice';

const CartItems = () => {
    const dispatch = useDispatch();
    const { BagProducts, addedOrder } = useSelector((state) => state.shop);

    const [email, setEmail] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleRemoveFromCart = async (productId) => {
        dispatch(updateQuantity({ productId, quantity: -1 }));

        dispatch(removeFromCart(productId));
    };

    const handleIncrementQuantity = (productId) => {
        dispatch(updateQuantityFetch({ productId, quantity: 1 }));
    };

    const handleDecrementQuantity = (productId) => {
        if (BagProducts.find(item => item.id === productId).quantity > 1) {
            dispatch(updateQuantityFetch({ productId, quantity: -1 }));
        }
    };

    const totalAmount = BagProducts.reduce((total, product) => {
        return total + product.new_price * product.quantity;
    }, 0);

    const handleOrder = () => {
        if (email) {

            dispatch(getOrdersFetch());

            const orderObject = {
                email: email,
                products: BagProducts.map(product => ({
                    id: product.id,
                    name: product.name,
                    new_price: product.new_price,
                    quantity: product.quantity,
                    total: product.new_price * product.quantity,
                })),
                totalAmount: totalAmount,
            };

            console.log(orderObject);


            console.log('Order sent successfully:', addedOrder);

            try {
                dispatch(fetchAddToOrders(orderObject));

                BagProducts.forEach(product => {
                    dispatch(removeFromCart(product.id));
                });
                setOrderPlaced(true);

                alert('Order sent successfully!');

            } catch (error) {
                console.error('Error adding order:', error);
            }

            // getOrdersFetch(dispatch);
        }
        else {
            alert('Please enter your email to place to order!');
        }
    };

    useEffect(() => {
        if (addedOrder) {
            console.log('Order sent successfully:', addedOrder);
        }
    }, [addedOrder]);


    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr />

            {BagProducts.map((product) => {
                if (product.quantity > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={`/images/${product.image}`} className="carticon-product-icon" alt="product-icon" />
                                <p>{product.name}</p>
                                <p><b>${product.new_price}</b></p>

                                <div className="cartitems-quantity-controls">
                                    <button className='quantityButton' onClick={() => handleDecrementQuantity(product.id)}>-</button>
                                    <b>{product.quantity}</b>
                                    <button className='quantityButton' onClick={() => handleIncrementQuantity(product.id)}>+</button>
                                </div>

                                <p><b>${product.new_price * product.quantity}</b></p>

                                <img
                                    className="cartitems-remove-icon"
                                    src={remove_icon}
                                    alt="remove_icon"
                                    onClick={() => handleRemoveFromCart(product.id)}
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>

                        <hr />

                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${totalAmount}</h3>
                        </div>
                    </div>
                </div>

                <div className="cartitems-email">
                    <p>Enter your email here to order:</p>

                    <input className='email-input' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleOrder}>Order</button>

                    {orderPlaced && <p>Order placed successfully!</p>}

                </div>
            </div>
        </div>
    );
};

export default CartItems;
