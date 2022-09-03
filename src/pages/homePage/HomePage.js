import React from 'react';
import BannerMain from '../../components/banner/BannerMain';
import Category from '../../components/category/Category';
import Feature from '../../components/feature/Feature';
import Navbar from '../../components/navbar/Navbar';
import NewArrival from '../../components/newArrival/NewArrival';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <BannerMain />
            <Feature />
            <Category />
            <NewArrival />
        </>
    );
};

export default HomePage;