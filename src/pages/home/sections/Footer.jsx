import React from 'react';
import logo from '../../../assets/images/logo.svg'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="container footer-upper">
            <div className="footer row between align-center g10">
                <Link className='footer__logo' to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <a className='footer__tel' href="tel: +998792220700">+998 (79) 222 07 00</a>
                <div className='footer__tgs row'>
                    <a className="tg" href='https://www.instagram.com/sharquniversiteti?igsh=NGdyenZ3cGp3djl4' target='_blank'>
                        <i className="fa-brands fa-instagram"/>
                    </a>
                    <a className="tg" href='https://t.me/SHARQ_EDU' target='_blank'>
                        <i className="fa-brands fa-telegram"/>
                    </a>
                    <a className="tg" href='https://qabul.sharqedu.uz/' target='_blank'>
                        <i className="fa-solid fa-globe"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;