import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={`/images/${props.image}`} alt="image_item" /></Link>

            <p>{props.name}</p>

            <p>{props.category}</p>

            <div className="item-prices">
                <div className="item-price-new">${props.price}</div>
            </div>
        </div>
    )
};

export default Item;