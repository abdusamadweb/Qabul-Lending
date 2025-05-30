import './Home.scss'
import React from 'react';
import Hero from "./sections/Hero.jsx";
import Afzal from "./sections/Afzal.jsx";
import Yonalish from "./sections/Yonalish.jsx";
import Hamkor from "./sections/Hamkor.jsx";
import Footer from "./sections/Footer.jsx";
import Manzil from "./sections/Manzil.jsx";
import Litsenziya from "./sections/Litsenziya.jsx";
import About from "./sections/About.jsx";
import AI from "./sections/AI.jsx";

const Home = () => {
    return (
        <div className='home'>

            <Hero />
            <Afzal />
            <Yonalish />
            <AI />
            <Hamkor />
            <About />
            <Litsenziya />
            <Manzil />
            <Footer />

        </div>
    );
};

export default Home;