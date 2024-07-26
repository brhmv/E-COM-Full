import React from "react";
import "./ProductDisplay.css";
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/ShopSlice';

const ProductDisplay = (props) => {
    const dispatch = useDispatch();
    const { product } = props;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert(`${product.name} added to cart successfully!`);
    };

    if (!product) {
        return null;
    }

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={`/images/${product.image}`} alt="image_product" />
                    <img src={`/images/${product.image}`} alt="image_product" />
                    <img src={`/images/${product.image}`} alt="image_product" />
                    <img src={`/images/${product.image}`} alt="image_product" />
                </div >

                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={`/images/${product.image}`} alt="image_product" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>

                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="star_icon" />
                    <img src={star_icon} alt="star_icon" />
                    <img src={star_icon} alt="star_icon" />
                    <img src={star_dull_icon} alt="star_icon" />
                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.price}</div>
                </div>

                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, libero possimus! Quod libero, animi non facilis autem natus dicta velit!
                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>

                    <div className="productdisplay-right-sizes">
                        <div className="size-div">S</div>
                        <div className="size-div">M</div>
                        <div className="size-div">L</div>
                        <div className="size-div">XL</div>
                        <div className="size-div">XXL</div>
                    </div>
                </div>

                <button onClick={handleAddToCart} className="addcart-button">ADD TO CART</button>

                <p className="productdisplay-right-category"><span>Category : </span>Adult</p>
                <p className="productdisplay-right-category"><span>Tags: </span>Modern , Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay;