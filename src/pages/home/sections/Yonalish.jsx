import React from 'react';

const items = [
    {
        title: '60220300 - Tarix',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '15 million'
            },
            {
                daily: 'Sirtqi',
                lang: 'O’zbek tili',
                year: '(O’qishni ko’chirish)',
                money: '13 million'
            },
        ]
    },
    {
        title: '60610500 - Sun’iy intellekt',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '18 million'
            },
            {
                daily: 'Sirtqi',
                lang: '.',
                year: 'Mavjud emas',
                money: '.'
            },
        ]
    },
    {
        title: '60611200 - Kiberxavfsizlik injiniringi',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '18 million'
            },
            {
                daily: 'Sirtqi',
                lang: 'O’zbek tili',
                year: '(O’qishni ko’chirish)',
                money: '13 million'
            },
        ]
    },
    {
        title: '60610400 - Dasturiy injiniringi',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '18 million'
            },
            {
                daily: 'Sirtqi',
                lang: 'O’zbek tili',
                year: '(O’qishni ko’chirish)',
                money: '13 million'
            },
        ]
    },
    {
        title: '60230100 - Psixologiya',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '15 million'
            },
            {
                daily: 'Sirtqi',
                lang: 'O’zbek tili',
                year: '(O’qishni ko’chirish)',
                money: '13 million'
            },
        ]
    },
    {
        title: '60410100 - Iqtisodiyot',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '15 million'
            },
            {
                daily: 'Sirtqi',
                lang: 'O’zbek tili',
                year: '(O’qishni ko’chirish)',
                money: '13 million'
            },
        ]
    },
    {
        title: '60410900 - Biznesni boshqarish',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '16 million'
            },
            {
                daily: 'Sirtqi',
                lang: 'O’zbek tili',
                year: '(O’qishni ko’chirish)',
                money: '13 million'
            },
        ]
    },
    {
        title: '60411200 - Marketing',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '16 million'
            },
            {
                daily: 'Sirtqi',
                lang: 'O’zbek tili',
                year: '(O’qishni ko’chirish)',
                money: '13 million'
            },
        ]
    },
    {
        title: '60410500 - Moliya va moliyaviy texnologiyalar',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '17 million'
            },
            {
                daily: 'Sirtqi',
                lang: 'O’zbek tili',
                year: '(O’qishni ko’chirish)',
                money: '13 million'
            },
        ]
    },
    {
        title: '60230100 - Filologiya va tillarni o’qitish (ingliz tili)',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '15 million'
            },
            {
                daily: 'Sirtqi',
                lang: '.',
                year: 'Mavjud emas',
                money: '.'
            },
        ]
    },
    {
        title: '60230100 - Filologiya va tillarni o’qitish (rus tili)',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '15 million'
            },
            {
                daily: 'Sirtqi',
                lang: '.',
                year: 'Mavjud emas',
                money: '.'
            },
        ]
    },
    {
        title: '60230100 - Filologiya va tillarni o’qitish (o’zbek tili)',
        inner: [
            {
                daily: 'Kunduzgi',
                lang: 'O’zbek tili',
                year: '4-yil',
                money: '15 million'
            },
            {
                daily: 'Sirtqi',
                lang: '.',
                year: 'Mavjud emas',
                money: '.'
            },
        ]
    },
]

const Yonalish = () => {
    return (
        <div className="yonalish sect" id="yonalishlar">
            <div className="container">
                <h2 className="yonalish__title s-title">Ta'lim yoʻnalishlari</h2>
                <p className="yonalish__desc">
                    Bu dunyodagi eng yuqori maosh to‘lanadigan va doimiy talabga ega bo’lgan yo‘nalishlar!
                    Barcha dasturlar Xalqaro ta’lim markazlari  bilan hamkorlikda oʻqitiladi.
                    Bizning Universitetda siz Biznes, Pedagogika, Yuridik va IT yo’nalishidagi barcha kasblarni bemalol egallashingiz mumkin!
                </p>
                <ul className="yonalish__list">
                    {items?.map((i, index) => (
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