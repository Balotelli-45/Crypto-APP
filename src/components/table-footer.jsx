import React, { useEffect } from "react";
import "./table-footer.css";

const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);
    return (
        <div className="tableFooter">
            {range.map((el, index) => {
                if (page === el) {
                    return (
                        <button
                            key={index}
                            className="button activeButton"
                            onClick={() => setPage(el)}
                        >
                            {el}
                        </button>
                    );
                }

                return (
                    <button
                        key={index}
                        className="button inactiveButton"
                        onClick={() => setPage(el)}
                    >
                        {el}
                    </button>
                );
            })}
        </div>
    );
};

export default TableFooter;
