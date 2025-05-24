import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../assets/images/logo.png'
import geroImg from '../../../assets/images/hero-img.png'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className="container">
                <div className='header row between align-center'>
                    <Link className='header__logo' to='/'>
                        <img src={logo} alt="logo"/>
                    </Link>
                    <nav className="nav row align-center">
                        <a className='nav__link' href="/#afzalliklar">Afzalliklar</a>
                        <a className='nav__link' href="/#yonalishlar">Yo’nalishlar</a>
                        <a className='nav__link' href="/#litsenziya">Litsenziya</a>
                        <a className='nav__link' href="/#joylashuv">Joylashuv</a>
                        <a className='nav__link btn' href="/#ariza">Ariza topshirish</a>
                    </nav>
                </div>
                <div className="main">
                    <div className="wrapper">
                        <h1 className='main__title'>
                            Xalqaro darajadagi
                            Universitet talabasi bo’ling!
                        </h1>
                        <ul className='main__list'>
                            <li className="item">
                                Yuqori ta’lim sifati, zamonaviy o‘quv auditoriyalari va zamonaviy
                                muhitga munosib yuqori salohiyatli professor o‘qituvchilar
                            </li>
                            <li className="item">
                                Eng yuqori maosh to‘lanadigan IT kasblari
                                (AI, Kiberxavfsizlik, Ma’lumotlar ilmi, Raqamli biznes)
                            </li>
                            <li className="item">
                                Universitetdagi startap laboratoriyasida oʻz biznes yoki
                                texnologik loyihangizni amalga oshirishingiz mumkin!
                            </li>
                        </ul>
                        <div className="main__btns">
                            <a className='btn' href="/#ariza">Ariza topshirish</a>
                            <span className='btn odiy'>Sirtqi va masofaviy ta’lim ham mavjud!</span>
                        </div>
                    </div>
                    <img className='main__img' src={geroImg} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;