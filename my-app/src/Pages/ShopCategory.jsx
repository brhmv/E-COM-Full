import React, { useEffect, useState } from 'react';
import Item from '../Components/Item/Item';
import './CSS/ShopCategory.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFetch } from '../Store/Api';
import Footer from '../Components/Footer/Footer';


function ShopCategory(props) {
    const dispatch = useDispatch();
    const { allProducts, status, error } = useSelector((state) => state.shop);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        if (status === 'idle') { dispatch(getProductsFetch()); }
    }, [dispatch, status]);

    useEffect(() => {
        setFilteredProducts(allProducts.filter(item => item.category === props.category));
    }, [allProducts, props.category]);


    ////////////////////////////////////////////////////////////////////////

    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        let sortedProducts = [...filteredProducts];

        if (sortOrder !== '') {
            sortedProducts = sortGoodsByPrice(sortedProducts, sortOrder);
        }

        setFilteredProducts(sortedProducts);
    }, [sortOrder]);

    const sortGoodsByPrice = (array, order) => {
        let sortedProducts = [...array];
        sortedProducts.sort((a, b) => {
            if (order === 'increase') {
                return parseFloat(a.new_price) - parseFloat(b.new_price);
            } else if (order === 'decrease') {
                return parseFloat(b.new_price) - parseFloat(a.new_price);
            }
            return 0;
        });
        return sortedProducts;
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    //////////////////////////////////////////////////////////////////////////

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="banner" />

            <div className="sort-div">
                <b>Sort by Price:</b>
                <select className="sort-select" onChange={handleSortChange} value={sortOrder}>
                    <option value="">Select</option>
                    <option value="increase">Low to high</option>
                    <option value="decrease">High to low</option>
                </select>
            </div>

            <div className="shopcategory-products">
                {filteredProducts.map((item) => (
                    <Item className='item' key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>

            <div className="shopcategory-loadmore">Explore More</div>

            <Footer />
        </div>
    );
}

export default ShopCategory;