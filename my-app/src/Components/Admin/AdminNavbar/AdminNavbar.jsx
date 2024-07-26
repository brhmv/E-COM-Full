import React from "react";
import './AdminNavbar.css';
import { Link } from 'react-router-dom';


function AdminNavbar() {


    return (
        <div className="adminNavbar" >
            <ul className='nav-menu'>
                <li><Link to='orders'>Orders</Link></li>
                <li><Link to='products'>Products</Link></li>
            </ul>
        </div >
    )
}

export default AdminNavbar;