import "./option.css";
import React, { useState } from "react";
import Quantity from "./Quantity";

export default function Option({ optionInfos, parentActivationHandler, initialQuantity, id }) {
    const { name, description, price, img } = optionInfos;

    const quantityHandler = (quantity) => {
        initialQuantity = quantity;

        if (quantity === 0) setIsActive(false);
    }

    const [isActive, setIsActive] = useState(initialQuantity > 0 ? true : false);

    const optionClickHandler = () => {
        parentActivationHandler({
            id,
            name,
            price,
            itemQuantity: initialQuantity
        });
        
        if (initialQuantity === 0) quantityHandler(1);
        
        if (!isActive) setIsActive(true);
    };

    return (
        <li className={isActive ? "option active" : "option"} onClick={optionClickHandler}>
            <img src={img} alt="dessert option" />
            <p className="option-name">{name}</p>
            <p className="option-description">{description}</p>
            <p className="price">R$ {price}</p>
            {
                isActive ?
                    <Quantity initialQuantity={initialQuantity > 0 ? initialQuantity : 1} parentQuantityHandler={quantityHandler} />
                    :
                    null
            }
        </li>
    )
}
