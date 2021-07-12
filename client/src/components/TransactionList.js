import React from "react";

const TransactionList = () => {
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <li class="minus">
                    Cash <span>-$400</span>
                    <button class="delete-btn">x</button>
                </li>
                {/* {transactions.map((transaction) => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))} */}
            </ul>
        </>
    );
};

export default TransactionList;
