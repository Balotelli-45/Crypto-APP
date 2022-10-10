import './Navbar.css';
import React, { useEffect, useState } from "react";
import Table from "./Heading";

const NavbarComponent = () => {
    const headers = {
        'X-CMC_PRO_API_KEY': '1eb89384-d4e2-4308-805d-ee8e7260ca09'
    };

    const [data, setData] = useState([]);
    const [copyData, setCopyData] = useState([]);

    const [selected, setSelected] = useState({
        market: true,
        watchlist: false
    });

    useEffect(() => {
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', { headers })
            .then(response => response.json())
            .then(data => {
                setData(data.data);
                setCopyData(data.data);
            });
    }, []);

    const ChangeSelection = (selection) => { // 'market' 'watchlist'
        const newSelected = Object.keys(selected).reduce((acc, key) => { // ['market', 'watchlist']
            acc[key] = key === selection;
            return acc;
        }, {});
        setSelected(newSelected);

        if (selection === 'market') {
            setData(copyData);
        } else {
            setData(JSON.parse(localStorage.getItem('storage')));
        }
    }



    return (
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    <div className="navbar-logo-image"></div>
                    <div className="navbar-logo-label">Crypto Planet</div>
                </div>
                <div className="navbar-items">
                    <div className="navbar-item" onClick={() => ChangeSelection('market')} style={{ color: (selected.market) ? '#5367FF' : 'white', borderBottom: (selected.market) ? '2px solid #5367FF' : 'none' }}>
                        <span className="navbar-item-label">
                            Market
                        </span>
                    </div>
                    <div className="navbar-item" onClick={() => ChangeSelection('watchlist')} style={{ color: (selected.watchlist) ? '#5367FF' : 'white', borderBottom: (selected.watchlist) ? '2px solid #5367FF' : 'none' }}>
                        <span className="navbar-item-label">
                            Watchlist
                        </span>
                    </div>
                </div>
            </div>
            <div className="table-container">
                <Table data={data} rowsPerPage={20} />
            </div>
        </div>
    );
};

export default NavbarComponent;
