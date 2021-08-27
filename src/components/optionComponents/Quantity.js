import React, { useState } from "react";

export default function Quantity(props) {
    const [value, setValue] = useState(1);

    const valueDecreaser = () => {
        if (value > 0) {
            props.parentQuantityHandler(value - 1);
            setValue(value - 1);
        }
    }
    const valueIncreaser = () => {
        props.parentQuantityHandler(value + 1);
        setValue(value + 1);
    }
    return (
        <div className="quantity-container hidden">
            <button className="remove-button" onClick={valueDecreaser}>-</button>
            <p>{value}</p>
            <button className="add-button" onClick={valueIncreaser}>+</button>
        </div>
    )
}
