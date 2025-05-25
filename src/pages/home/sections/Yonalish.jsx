import React from 'react';

const items = [
    {
        title: '60220300 - Tarix',
        inner: [
            {
                daily: 'Kunduzgi',
                year: '4-yil',
                lang: 'O’zbek tili',
                money: '16 million'
            },
            {
                daily: 'Kunduzgi 2',
                year: '4-yil',
                lang: 'O’zbek tili',
                money: '16 million'
            },
        ]
    }
]

const Yonalish = () => {
    return (
        <div className="yonalish sect" id="yonalishlar">
            <div className="container">
                <h2 className="yonalish__title s-title">Ta'lim yo'nalishlari</h2>
                <p className="yonalish__desc">
                    Bu dunyodagi eng yuqori maosh to‘lanadigan va doimiy talabga ega bo’lgan yo‘nalishlar!
                    Barcha dasturlarXalqaro ta’lim markazlari  bilan hamkorlikda o'qitiladi.
                    Bizning Universitetda siz Biznes, Pedagogika, Yuridik va IT yo’nalishidagi barcha kasblarni bemalol egallashingiz mumkin!
                </p>
                <ul className="yonalish__list">
                    {Array(4).fill(null).flatMap(() => items)?.map((i, index) => (
                        <li className="item" key={index}>
                            <h3 className="item__title">{ i.title }</h3>
                            <div className="flex-column g10">
                                {i.inner.map(j => (
                                    <div className="wrap" key={j.daily}>
                                        <div className="row between i1">
                                            <span>{ j.daily }</span>
                                            <span>{ j.year }</span>
                                        </div>
                                        <div className="row between">
                                            <span>{ j.lang }</span>
                                            <span>{ j.money }</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Yonalish;