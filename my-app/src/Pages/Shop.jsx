import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";


function Shop() {
    return (
        <div>
            <Hero />
            <br />
            <br />
            <Popular />
            <br />
            <br />
            <Offers />
         
            <NewCollections />
         
            <NewsLetter />

            <Footer />
        </div>
    )
}

export default Shop;