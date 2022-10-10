import React, { useState } from "react";
import useTable from "../hooks/useTable";
import "./Heading.css";
import TableFooter from "./table-footer";
import vector from "../images/Vector.png";

const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    const addToStorage = (item) => {
        // add item to storage, otherwise remove it
        const storage = JSON.parse(localStorage.getItem('storage'));
        if (storage) {
            const index = storage.findIndex((i) => i.id === item.id);
            if (index === -1) {
                storage.push(item);
            } else {
                storage.splice(index, 1);
            }
            localStorage.setItem('storage', JSON.stringify(storage));
        } else {
            localStorage.setItem('storage', JSON.stringify([item]));
        }

    }

    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
        }}>
            <div style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#121418',
                paddingTop: '40px',
                borderRadius: '10px',
            }}>
                <table className="table">
                    <thead>
                        <tr className="tableRowHeader">
                            <th className="tableHeader">
                                <div className="tableHeaderContent">
                                    <div>
                                        #
                                    </div>
                                    <img className="arrow" src={'../assets/arrow.png'} alt='arrow' />
                                </div>
                            </th>
                            <th className="tableHeader">
                                <div className="tableHeaderContent">
                                    <div>
                                        Coin Name
                                    </div>
                                    <img className="arrow" src={'../assets/arrow.png'} alt='arrow' />
                                </div>
                            </th>
                            <th className="tableHeader">
                                <div className="tableHeaderContent">
                                    <div>
                                        Coin Price
                                    </div>
                                    <img className="arrow" src={'../assets/arrow.png'} alt='arrow' />
                                </div>
                            </th>
                            <th className="tableHeader">
                                <div className="tableHeaderContent">
                                    <div>
                                        24%
                                    </div>
                                    <img className="arrow" src={'../assets/arrow.png'} alt='arrow' />
                                </div>
                            </th>
                            <th className="tableHeader">
                                <div className="tableHeaderContent">
                                    <div>
                                        24h High Price
                                    </div>
                                    <img className="arrow" src={'../assets/arrow.png'} alt='arrow' />
                                </div>
                            </th>
                            <th className="tableHeader">
                                <div className="tableHeaderContent">
                                    <div>
                                        24h Low Price
                                    </div>
                                    <img className="arrow" src={'../assets/arrow.png'} alt='arrow' />
                                </div>
                            </th>
                            <th className="tableHeader">
                                <div className="tableHeaderContent">
                                    <div>
                                        Chart
                                    </div>
                                    <img className="arrow" src={'../assets/arrow.png'} alt='arrow' />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {slice.map((el, index) => ( // [[{},..], ...]
                            <tr className="tableRowItems" key={el.id}>
                                <td className="tableCell star" style={{ cursor: 'pointer' }} onClick={() => addToStorage(el)}>
                                    <img className="starIcon" src="../assets/star.png" alt='star' />
                                    <div style={{ paddingLeft: '15px' }}>
                                        {index + 1}
                                    </div>
                                </td>
                                <td className="tableCell">
                                    <div className="nameCell">
                                        <div style={{
                                            borderRadius: '100%'
                                        }}>
                                            <img style={{
                                                width: '30px',
                                                height: '30px'
                                            }} src={`../assets/crypto/${el.symbol.toLowerCase()}.svg`} />
                                        </div>
                                        <div style={{ paddingLeft: '10px', paddingRight: '20px' }}>
                                            {el.name}
                                        </div>
                                        <div className="symbol">
                                            {el.symbol}
                                        </div>
                                    </div>
                                </td>
                                <td className="tableCell">${Math.round(el.quote.USD.price * 100) / 100}</td>
                                <td className="tableCell"
                                    style={{ color: (el.quote.USD.percent_change_24h > 0) ? 'green' : 'red' }}>{el.quote.USD.percent_change_24h > 0 ? '+' : ''}{Math.round(el.quote.USD.percent_change_24h * 100) / 100}%
                                </td>
                                <td className="tableCell"></td>
                                <td className="tableCell"></td>
                                <td className="tableCell"><img style={{ width: '70px', height: '30px' }} src={vector} alt="vector" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
            </div>

        </div>
    );
};

export default Table;
