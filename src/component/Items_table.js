import React from "react";
import "./items_table.css";
import { useState } from "react";

const Item_table = () => {
    const [data, SetData] = useState([
        {
            sl_No: 1,
            product: "",
            quantity: "",
            amount: "",
            total_amt: "",
        },
    ]);
    const handleClick = () => {
        SetData((prevData) => [
            ...prevData,
            {
                sl_No: prevData.length + 1,
                product: "",
                quantity: "",
                amount: "",
                total_amt: "",
            },
        ]);
    };
    const handleChange = (e, i) => {
        const { name, value } = e.target;
        const onchangeval = [...data];
        onchangeval[i][name] = value;
        SetData(onchangeval);
        if (name === "quantity" || name === "amount") {
            const quantity = parseFloat(onchangeval[i].quantity);
            const amount = parseFloat(onchangeval[i].amount);
            onchangeval[i].total_amt =
                isNaN(quantity) || isNaN(amount) ? "" : (quantity * amount).toFixed(2);
        }

        SetData(onchangeval);
    };
    const handleDelete = (i) => {
        const newData = data.filter((item, index) => index !== i);
        SetData(newData.map((item, index) => ({ ...item, sl_No: index + 1 })));
    };
    const [finalTotal, setFinalTotal] = useState(0);
    const handleTotalClick = () => {
        const sumTotal = data.reduce(
            (acc, val) => acc + parseFloat(val.total_amt || 0),
            0
        );
        setFinalTotal(sumTotal);
    };

    return (
        <>
            <div className="Item_table_outer_div">
                <div className="item_table_div">
                    <table style={{ paddingTop: "20px", paddingBottom: "0px" }}>
                        <thead>
                            <th>Sl.No.</th>
                            <th>Name of the Product</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Total Amount</th>
                            <th>Action</th>
                        </thead>
                        {data.map((val, i) => (
                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            name="sl_No"
                                            value={val.sl_No}
                                            onChange={(e) => handleChange(e, i)}
                                            type="number"
                                            className="serialno"
                                            readOnly={true}
                                            style={{
                                                width: "50px",
                                                height: "25px",
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="product"
                                            value={val.product}
                                            onChange={(e) => handleChange(e, i)}
                                            type="text"
                                            style={{
                                                width: "350px",
                                                height: "25px",
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="quantity"
                                            value={val.quantity}
                                            onChange={(e) => handleChange(e, i)}
                                            type="number"
                                            style={{
                                                width: "65px",
                                                height: "25px",
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="amount"
                                            value={val.amount}
                                            onChange={(e) => handleChange(e, i)}
                                            type="number"
                                            style={{
                                                width: "65px",
                                                height: "25px",
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="total_amt"
                                            value={val.total_amt}
                                            readOnly={true}
                                            className="total_amount"
                                            onChange={(e) => handleChange(e, i)}
                                            type="number"
                                            style={{
                                                width: "120px",
                                                height: "25px",
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <div
                                            style={{
                                                width: "70px",
                                                height: "25px",
                                            }}
                                        >
                                            <button
                                                onClick={() => handleDelete(i)}
                                                className="close-circle"
                                            >
                                                <ion-icon name="close-circle"></ion-icon>
                                            </button>
                                            <button onClick={handleClick} className="add-circle">
                                                <ion-icon name="add-circle"></ion-icon>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                    <table className="Final_total_button_table">
                        <tr>
                            <td>
                                <div>
                                    <button
                                        className="Final_total_button"
                                        onClick={handleTotalClick}
                                    >
                                        <span>
                                            <ion-icon name="filter-circle"></ion-icon>
                                        </span>

                                        <span>TOTAL</span>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    readOnly={true}
                                    className="Final_total_label"
                                    value={finalTotal}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};
export default Item_table;
