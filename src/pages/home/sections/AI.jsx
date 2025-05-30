import React from 'react';
import ai1 from '../../../assets/images/ai1.png'
import ai2 from '../../../assets/images/ai2.jpg'
import ai3 from '../../../assets/images/ai3.jpg'


const Ai = () => {


    return (
        <div className="ai sect" id="ai">
            <div className="container">
                <h2 className="ai__title s-title">Sunʼiy intellekt va dasturiy injiniring yo‘nalishlari bo‘yicha
                    xorijiy professor-o‘qituvchilarimiz</h2>
                <ul className="ai__list flex-column g1">
                    <li className="item">
                        <img src={ai1} alt="image"/>
                        <div className='item__titles'>
                            <h3 className="title">Prof. Dr. İsmail Rakıp KARAŞ</h3>
                            <p className="desc">
                                Turkiyaning Karabuk universiteti professori, 3D Geoaxborot
                                texnologiyalari guruhi rahbari. Geoaxborot fanlari va kompyuter
                                injiniringi sohasida 25+ yillik tajribaga ega. AQSH va Malayziyada ilmiy
                                faoliyat olib borgan, 100 dan ortiq maqola muallifi. Hozirda Karabuk
                                universiteti prorektori.
                            </p>
                        </div>
                    </li>
                    <li className="item">
                        <img src={ai2} alt="image"/>
                        <div className='item__titles'>
                            <h3 className="title">Dr. Öğr. Üyesi İdris KAHRAMANК</h3>
                            <p className="desc">
                                Karabuk universiteti Kompyuter injiniringi kafedrasida doktor
                                o‘qituvchi. U 2019 yilda shu universitetda kompyuter muhandisligi
                                bo‘yicha PhD darajasini olgan. Ilmiy faoliyati geoaxborot tizimlari, 3D
                                GAT, kompyuter grafikasi va sunʼiy intellekt kabi sohalarni qamrab
                                oladi. Uning ishlanmalarida yo‘llarni sunʼiy neyron tarmoqlar yordamida
                                aniqlash va virtual reallik asosidagi 3D kampus tizimlari kabi loyihalar
                                mavjud. Shuningdek, u bir necha xalqaro maqolalar muallifi va
                                turli ilmiy tadqiqotlarda ishtirok etgan.
                            </p>
                        </div>
                    </li>
                    <li className="item">
                        <img src={ai3} alt="image"/>
                        <div className='item__titles'>
                            <h3 className="title">Dr. Emrullah Demiral</h3>
                            <p className="desc">
                                Karabuk universiteti Bilim texnologiyalari kasb-hunar kolleji direktori va
                                dasturiy injiniring bo‘limida doktor-o‘qituvchi. Ilmiy faoliyati geoaxborot
                                tizimlari, 3D GAT, kompyuter grafikasi va sunʼiy intellekt kabi sohalarni
                                qamrab oladi. Uning ishlanmalarida yo‘llarni sunʼiy neyron tarmoqlar
                                yordamida aniqlash va virtual reallik asosidagi 3D kampus tizimlari
                                kabi loyihalar mavjud. Shuningdek, u bir necha xalqaro maqolalar
                                muallifi va turli ilmiy tadqiqotlarda ishtirok etgan.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Ai;