import React from 'react';
import img from '../../../assets/images/about-img.jpg'
import {Button, Form, Input} from "antd";
import {PhoneInput} from "../../../components/inputs/Inputs.jsx";

const About = () => {
    return (
        <div className='about' id='ariza'>
            <div className="container">
                <div className="about__inner">
                    <img src={img} alt="img"/>
                    <div>
                        <h2 className="title">Universitet haqida</h2>
                        <p className="desc">
                            Sharq Universiteti - Oliy ta’lim, fan va
                            innovatsiyalar vazirligi tomonidan 2025-yil 25-fevral kuni
                            litsenziyalangan. Dastlabki litsenziya o’nta bakalavr
                            yo‘nalishlari uchun taqdim qilingan. Universitet diplomi barcha
                            davlat oliygohlari diplomi bilan bir xil yuridik kuchga ega.
                            Ya’ni, SHARQ Universiteti diplomi "Taʼlim toʻgʻrisida"gi Qonunning
                            31-moddasiga asosan Oʻzbekiston Respublikasi hududida
                            toʻgʻridan-toʻgʻri tan olinadi.
                        </p>
                    </div>
                </div>
                <Form
                    className="about__form form"
                    layout="vertical"
                >
                    <div className="form__titles">
                        <h2 className="title">Ariza topshirish</h2>
                        <p className="desc">Hoziroq ariza qoldiring - biz sizga imkoniyatlar haqida
                            batafsil ma'lumot beramiz!</p>
                    </div>
                    <div>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: "Iltimos to'ldiring" }]}
                        >
                            <Input placeholder='Ismingizni kiriting' />
                        </Form.Item>
                        <Form.Item
                            name="phone_number"
                            rules={[{ required: true, message: "Iltimos to'ldiring" }]}
                        >
                            <PhoneInput />
                        </Form.Item>
                        <Button
                            size='large'
                            type="primary"
                            htmlType="submit"
                        >
                            Ro'yxatdan o'tish
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default About;