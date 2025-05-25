import React from 'react';
import ariza1 from '../../../assets/images/ariza1.jpg'
import ariza2 from '../../../assets/images/ariza2.jpg'
import ariza3 from '../../../assets/images/ariza3.jpg'
import ariza4 from '../../../assets/images/ariza4.jpg'
import ariza5 from '../../../assets/images/ariza5.jpg'
import ariza6 from '../../../assets/images/ariza6.jpg'

const Afzal = () => {
    return (
        <div className='afzal sect' id='afzalliklar'>
            <div className="container">
                <h2 className="afzal__title s-title">Nega aynan SHARQ Universiteti?</h2>
                <ul className="afzal__list">
                    <li className="item">
                        <img src={ariza1} alt="img"/>
                        <span/>
                        <h3 className="title">Zamonaviy auditoriyalar</h3>
                    </li>
                    <li className="item">
                        <img src={ariza2} alt="img"/>
                        <span/>
                        <h3 className="title">Ikkinchi va uchinchi kurs SIRTQI ta’lim </h3>
                    </li>
                    <li className="item">
                        <img src={ariza3} alt="img"/>
                        <span/>
                        <h3 className="title">Karyera markazi</h3>
                    </li>
                    <li className="item">
                        <img src={ariza4} alt="img"/>
                        <span/>
                        <h3 className="title">Xalqaro aloqalar </h3>
                    </li>
                    <li className="item">
                        <img src={ariza5} alt="img"/>
                        <span/>
                        <h3 className="title">Startap va ishlanmalar laboratoriyasi</h3>
                    </li>
                    <li className="item">
                        <img src={ariza6} alt="img"/>
                        <span>asd</span>
                        <h3 className="title">100 mingdan ortiq manbalar</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Afzal;