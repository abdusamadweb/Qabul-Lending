import React from 'react';
import litsenz1 from '../../../assets/images/licence1.png'
import litsenz2 from '../../../assets/images/licence2.png'

const Litsenziya = () => {
    return (
        <div className="litsenz">
            <div className="container">
                <h2 className="litsenz__title">Sharq Universiteti Litsenziyasi</h2>
                <div className="litsenz__list">
                    <div className="item">
                        <img src={litsenz1} alt="img"/>
                    </div>
                    <div className="item">
                        <img src={litsenz2} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Litsenziya;