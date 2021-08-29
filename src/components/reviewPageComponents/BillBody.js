import "./bill.css";
import getTotalCost from "../../auxiliar/totalCost"

export default function BillBody({ selectedOptions }) {
    const reducerFunction = (accumulator, currentValue) => (accumulator + currentValue);

    const getSectionTotalItems = (section) => (
        section
            .map(item => item.itemQuantity)
            .reduce(reducerFunction)
    );

    const getTotalItems = () => (
        Object.keys(selectedOptions)
            .map(section => (getSectionTotalItems(selectedOptions[section])))
            .reduce(reducerFunction)
    );

    return (
        <div className="bill-body">

            <div className="bill-item">
                <p className="bill-title">Item</p>
                {Object.keys(selectedOptions).map(
                    section => (selectedOptions[section].map(
                        (item, index) => (<p key={index}>{item.name}</p>)
                    ))
                )}
                <p className="bill-title">Total</p>
            </div>

            <div className="bill-quantity">
                <p className="bill-title">Quantidade</p>
                {Object.keys(selectedOptions).map(
                    section => (selectedOptions[section].map(
                        (item, index) => (<p key={index}>{item.itemQuantity}</p>)
                    ))
                )}
                <p className="bill-title">{getTotalItems()}</p>
            </div>

            <div className="bill-price">
                <p className="bill-title">Preço</p>
                {Object.keys(selectedOptions).map(
                    section => (selectedOptions[section].map(
                        (item, index) => (<p key={index}>{item.price}</p>)
                    ))
                )}
                <p className="bill-title">{getTotalCost(selectedOptions)}</p>
            </div>

        </div>
    )
}