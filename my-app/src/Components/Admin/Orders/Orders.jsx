import React, { useEffect } from 'react';
import '../Orders/Orders.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOrdersFetch } from "../../../Store/Api";

function Orders() {
    const dispatch = useDispatch();
    const { Orders, status, error } = useSelector((state) => state.shop);

    useEffect(() => {
        getOrdersFetch(dispatch);
        console.log(Orders);
    }, [dispatch, Orders]);


    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }


    return (
        <div className="orders">
            {Orders.map((order) => (
                <div key={order.id} className="order-item">
                    <p>Email: {order.email}</p>
                    <p>Total Amount: ${order.totalAmount}</p>
                    <p>Products:</p>
                    <ul>
                        {order.products.map((product) => (
                            <li key={product.id}>
                                {product.name} - ${product.new_price} - Quantity: {product.quantity} - Total: ${product.total}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {(Orders.length === 0) && <b>No any order Yet</b>}
        </div>
    );
}

export default Orders;