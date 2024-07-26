import React, { useState } from 'react';
import './Navbar.css';
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const [menu, setMenu] = useState("shop");

    const bagProducts = useSelector((state) => state.shop.BagProducts);

    const itemCount = bagProducts.reduce((count, product) => count + product.quantity, 0);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <div><img src={logo} alt='logo' /></div>
                <p>SHOOPER</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}> <Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}><Link to='/men'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link to='/women'>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
                <li><Link to='/admin/products'>Admin</Link></li>
            </ul>

            <div className='nav-login-cart'>
                <Link to='/login'><button className='login-button'>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='icon' /></Link>
                <div className='nav-cart-count'>{itemCount}</div>
            </div>
        </div >
    );
}

export default Navbar;