import React from 'react';
import './main.scss'
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";
import Roadmap from "../../components/roadmap/Roadmap";
import AboutUs from "../../components/aboutUs/AboutUs";
import Technology from '../../components/technology/Technology';

const Main = () => {
    return (
        <div className={'main'}>
            <Header/>
            <Banner/>
            <Services/>
            <Roadmap/>
            <AboutUs/>
            <Technology/>
        </div>
    );
};

export default Main;