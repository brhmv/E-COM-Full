import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import Footer from "../Components/Footer/Footer";

const Product = () => {

    let all_product = useSelector((state) => state.shop.allProducts);
    const { productId } = useParams();

    const product = all_product.find((e) => e.id === Number(productId));



    return (<div>
        <BreadCrum product={product} />

        {product && <ProductDisplay product={product} />}

        <DescriptionBox />

        <RelatedProducts />

        <Footer />
    </div>)
};

export default Product;