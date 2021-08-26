import SectionTitle from "../sectionComponents/SectionTitle";
import OrderButtonsContainer from "./OrderButtonsContainer";
import React, { useState } from "react";

export default function ReviewPage(props) {
    const [items, setItems] = useState({
        meal: { name: "teste1", price: "1,50" },
        drink: { name: "teste2", price: "2,25" },
        dessert: { name: "teste3", price: "3,50" }
    });
    return (
        <div className="content">
            <SectionTitle title={"Revise seu pedido"} />
            <Bill items={items} />
            <OrderButtonsContainer redirectTo={props.redirectTo} />
        </div>
    )
}

function Bill(props) {
    const priceConverter = priceString => Number(priceString.replace(",", "."));
    const getTotal = Object.keys(props.items)
        .map(section => priceConverter(props.items[section].price))
        .reduce((accumulator, currentValue) => accumulator + currentValue)
        .toFixed(2).toString().replace(".", ",");

    return (
        <div className="bill-body">
            <div className="items-names">
                <p id="meal-name">{props.items.meal.name}</p>
                <p id="drink-name">{props.items.drink.name}</p>
                <p id="dessert-name">{props.items.dessert.name}</p>
                <p>Total</p>
            </div>
            <div className="items-prices">
                <p id="meal-price">{props.items.meal.price}</p>
                <p id="drink-price">{props.items.drink.price}</p>
                <p id="dessert-price">{props.items.dessert.price}</p>
                <p id="total-cost">{getTotal}</p>
            </div>
        </div>
    )
}

