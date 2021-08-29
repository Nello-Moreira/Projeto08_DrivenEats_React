import "./option.css";
import React, { useState } from "react";
import Quantity from "./Quantity";

export default function Option({ optionInfos, parentActivationHandler, activeChild, id }) {
    const { name, description, price, img } = optionInfos;

    let itemQuantity = 1;
    const quantityHandler = (quantity) => {
        itemQuantity = quantity;

        if (quantity === 0) {
            setIsActive(false);
        }
    }

    const [isActive, setIsActive] = useState(activeChild);

    const optionClickHandler = () => {
        parentActivationHandler({
            id,
            name,
            price,
            itemQuantity
        });
        
        if (!isActive) {
            setIsActive(true);
        }
    };

    return (
        <li className={isActive ? "option active" : "option"} onClick={optionClickHandler}>
            <img src={img} alt="dessert option" />
            <p className="option-name">{name}</p>
            <p className="option-description">{description}</p>
            <p className="price">R$ {price}</p>
            {
                isActive ?
                    <Quantity parentQuantityHandler={quantityHandler} />
                    :
                    null
            }
        </li>
    )
}
