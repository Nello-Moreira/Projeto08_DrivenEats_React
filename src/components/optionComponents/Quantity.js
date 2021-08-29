import "./quantity.css";
import React, { useState } from "react";

export default function Quantity({parentQuantityHandler}) {
    const [value, setValue] = useState(1);

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
