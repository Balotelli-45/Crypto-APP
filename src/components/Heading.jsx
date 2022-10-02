import React, { useEffect, useState } from 'react';
import "./Heading.css";



const Heading = function Heading() {

    const [list, setList] = useState();


    useEffect(() => {
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': '1eb89384-d4e2-4308-805d-ee8e7260ca09'
            }
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                data.data = data.data.map((it) => {
                    return {
                        ...it,
                        price: '$' + (Math.round(it.quote.USD.price * 100) / 100).toString(),
                        percent_change_24h: ((it.quote.USD.percent_change_24h > 0) ? '+' : '') + (Math.round(it.quote.USD.percent_change_24h * 100) / 100) + '%'
                    };
                });

                setList(data.data);
            });
    }, []);

    const columns = [
        '#',
        'name',
        'price',
        'percent_change_24h'
    ];

    return (
        <div className="heading-container">
            <div className='market-coin'>

            </div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {columns.map(column => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {list && list.map(row => (
                            <tr key={row.id}>
                                {columns.map(column => {
                                    if (column === '#') {
                                        return <td key={column}><button><span className="material-symbols-outlined">star</span></button></td>
                                    }

                                    if (column === 'percent_change_24h') {
                                        if (row[column][0] === '+') {
                                            return <td className="green" key={column}>{row[column]}</td>
                                        }

                                        return <td className="red" key={column}>{row[column]}</td>;
                                    }

                                    if (column === 'name') {
                                        return <td key={column} className='name'>{row[column]} <div className="symbol">{row['symbol']}</div></td>
                                    }

                                    return <td key={column}>{row[column]}</td>;
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Heading;
