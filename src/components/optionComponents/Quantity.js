import React, { useState } from "react";

export default function Quantity() {
    const [value, setValue] = useState(1);

    return (
        <div className="quantity-container hidden">
            <button className="remove-button" onClick={() => (value > 0 ? setValue(value - 1) : null)}>-</button>
            <p>{value}</p>
            <button className="add-button" onClick={() => (setValue(value + 1))}>+</button>
        </div>
    )
}