import React, { useEffect, useState } from 'react';
import './NewCollections.css'
import { useSelector, useDispatch } from 'react-redux';

import Item from '../Item/Item';
import { getProductsFetch } from '../../Store/Api';

const NewCollections = () => {
    const dispatch = useDispatch();
    const { allProducts, status, error } = useSelector((state) => state.shop);

    useEffect(() => {
        dispatch(getProductsFetch());
    }, [dispatch]);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        let sortedProducts = [...allProducts];

        if (sortOrder !== '') {
            sortedProducts = sortGoodsByPrice(sortedProducts, sortOrder);
        }

        setFilteredProducts(sortedProducts);
    }, [sortOrder, allProducts]);

    const sortGoodsByPrice = (array, order) => {
        let sortedProducts = [...array];
        sortedProducts.sort((a, b) => {
            if (order === 'increase') {
                return parseFloat(a.price) - parseFloat(b.price);
            } else if (order === 'decrease') {
                return parseFloat(b.price) - parseFloat(a.price);
            }
            return 0;
        });
        return sortedProducts;
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>

            <hr />

            <div className="sort-div">
                <b>Sort by Price:</b>
                <select className="sort-select" onChange={handleSortChange} value={sortOrder}>
                    <option value="">Select</option>
                    <option value="increase">Low to high</option>
                    <option value="decrease">High to low</option>
                </select>
            </div>

            <div className='collections'>
                {filteredProducts.map((item, i) => {
                    return <Item className='item' key={i} id={item.id} name={item.name} image={item.image} price={item.price} />;
                })}
            </div>
        </div>
    )
}

export default NewCollections;
