export default function Option(props) {
    const option = {
        name: props.optionInfos.name,
        description: props.optionInfos.description,
        price: priceHandler(props.optionInfos.price),
        img: props.optionInfos.img
    }
    return (
        <li className="option">
            <img src={option.img} alt="dessert option" />
            <p className="option-name">{option.name}</p>
            <p className="option-description">{option.description}</p>
            <p className="price">R$ {option.price}</p>
            <div className="quantity-container">
                <button className="remove-button">-</button>
                <p>0</p>
                <button className="add-button">+</button>
            </div>
        </li>
    )
}

function priceHandler(price) {
    if (typeof (price) === typeof (1)) {
        return price.toFixed(2).toString().replace(".", ",");
    }
    return priceHandler(Number(price.replace(",", ".")));
}