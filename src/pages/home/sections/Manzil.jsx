import React from 'react';

const Manzil = () => {
    return (
        <div className='manzil sect' id='joylashuv'>
            <div className="container">
                <h2 className="manzil__title s-title">Sharq Universiteti manzili</h2>
                <div className="manzil__locate">
                    <iframe
                        src="https://api-maps.yandex.ru/frame/v1/-/CHCkfHoU"
                        frameBorder="0"
                    />
                </div>
            </div>
        </div>
    );
};

export default Manzil;