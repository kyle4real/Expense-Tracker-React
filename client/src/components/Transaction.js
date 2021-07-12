import React from "react";
import moneyFormatter from "../util/moneyFormatter";

const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? "-" : "+";

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}{" "}
            <span>
                {sign}
                {moneyFormatter(transaction.amount)}
            </span>
            <button
                // onClick={() => deleteTransaction(transaction.id)}
                className="delete-btn"
            >
                x
            </button>
        </li>
    );
};

export default Transaction;
