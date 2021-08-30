import "./quantity.css";
import React, { useState } from "react";

export default function Quantity({ initialQuantity, parentQuantityHandler }) {
    const [value, setValue] = useState(initialQuantity);

    const valueDecreaser = () => {
        if (value > 0) {
            parentQuantityHandler(value - 1);
            setValue(value - 1);
        }
    }
    const valueIncreaser = () => {
        parentQuantityHandler(value + 1);
        setValue(value + 1);
    }
    return (
        <div className="quantity-container">
            <button className="remove-button" onClick={valueDecreaser}>-</button>
            <p>{value}</p>
            <button className="add-button" onClick={valueIncreaser}>+</button>
        </div>
    )
}
