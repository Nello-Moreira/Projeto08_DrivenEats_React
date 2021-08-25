import SectionTitle from "./SectionTitle";

export default function ReviewPage() {
    return (
        <div className="content">
            <SectionTitle title={"Revise seu pedido"} />
            <Bill />
        </div>
    )
}

function Bill() {
    return (
        <div className="bill-body">
            <div className="items-names">
                <p id="meal-name"></p>
                <p id="drink-name"></p>
                <p id="dessert-name"></p>
                <p>Total</p>
            </div>
            <div className="items-prices">
                <p id="meal-price"></p>
                <p id="drink-price"></p>
                <p id="dessert-price"></p>
                <p id="total-cost"></p>
            </div>
        </div>
    )
}