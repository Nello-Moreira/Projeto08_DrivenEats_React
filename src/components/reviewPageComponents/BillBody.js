export default function BillBody(props) {
    const priceToNumber = priceString => Number(priceString.replace(",", "."));
    const reducerFunction = (accumulator, currentValue) => accumulator + currentValue

    const getSectionTotalPrice = (section) => (
        section
            .map(item => priceToNumber(item.price) * item.itemQuantity)
            .reduce(reducerFunction)
    )

    const getTotalPrice = () => (
        Object.keys(props.allSections)
            .map(section => (getSectionTotalPrice(props.allSections[section])))
            .reduce(reducerFunction)
            .toFixed(2).toString().replace(".", ",")
    )

    const getSectionTotalItems = (section) => (
        section
            .map(item => item.itemQuantity)
            .reduce(reducerFunction)
    )

    const getTotalItems = () => (
        Object.keys(props.allSections)
            .map(section => (getSectionTotalItems(props.allSections[section])))
            .reduce(reducerFunction)
    )


    console.log(props.allSections);
    if (Object.keys(props.allSections).length === 0) {
        return null;
    }

    return (
        <div className="bill-body">

            <div className="bill-item">
                <p className="bill-title">Item</p>
                {Object.keys(props.allSections).map(
                    section => (props.allSections[section].map(
                        (item, index) => (<p key={index}>{item.name}</p>)
                    ))
                )}
                <p className="bill-title">Total</p>
            </div>

            <div className="bill-quantity">
                <p className="bill-title">Quantidade</p>
                {Object.keys(props.allSections).map(
                    section => (props.allSections[section].map(
                        (item, index) => (<p key={index}>{item.itemQuantity}</p>)
                    ))
                )}
                <p className="bill-title">{getTotalItems()}</p>
            </div>

            <div className="bill-price">
                <p className="bill-title">Preço</p>
                {Object.keys(props.allSections).map(
                    section => (props.allSections[section].map(
                        (item, index) => (<p key={index}>{item.price}</p>)
                    ))
                )}
                <p className="bill-title">{getTotalPrice()}</p>
            </div>

        </div>
    )
}