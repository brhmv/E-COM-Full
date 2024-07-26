import React from "react";
import './CSS/Admin.css';
import AdminNavbar from "../Components/Admin/AdminNavbar/AdminNavbar";
import { Route, Routes } from "react-router-dom";
import Orders from '../Components/Admin/Orders/Orders'
import Products from '../Components/Admin/Products/Products'
import Footer from "../Components/Footer/Footer";

function Admin() {
    return (
        <div className="admin">
            <AdminNavbar />

            <div className="routediv">

                <Routes>
                    <Route path='/' element={<Orders />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='products' element={<Products />} />
                </Routes>

            </div>

        </div>
    );
}

export default Admin;

