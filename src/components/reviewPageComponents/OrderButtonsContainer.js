import { Link } from "react-router-dom";
import getTotalCost from "./totalCost"

function sendWhatsAppMessage(allSections) {
    const getMealInfos = () => (
        allSections.meal
            .map(item => (item.name + `(${item.itemQuantity}x)`))
            .join(', ')
    );

    const getDrinkInfos = () => (
        allSections.meal
            .map(item => (item.name + `(${item.itemQuantity}x)`))
            .join(', ')
    );

    const getDessertInfos = () => (
        allSections.meal
            .map(item => (item.name + `(${item.itemQuantity}x)`))
            .join(', ')
    );

    

    const message = (
        `Olá, gostaria de fazer o pedido:\n`
        + `- Prato: ${getMealInfos()}\n`
        + `- Bebida: ${getDrinkInfos()}\n`
        + `- Sobremesa: ${getDessertInfos()}\n`
        + `Total: ${getTotalCost(allSections)}`
    );

    const link = "https://wa.me/5521999812307?text=" + encodeURIComponent(message);

    window.open(link, "_blank");
    
}

function OrderButton(props) {
    return (
        <button className="confirmation-button enabled-button" onClick={() => { sendWhatsAppMessage(props.allSections) }}>
            Tudo certo, pode pedir!
        </button>
    )
}

function CancelOrderButton(props) {
    return (
        <Link to={props.redirectTo}>
            <button className="cancel-button" >
                Cancelar
            </button>
        </Link>
    )
}

export default function OrderButtonsContainer(props) {
    return (
        <div className="order-buttons-container">
            <OrderButton allSections={props.allSections} />
            <CancelOrderButton redirectTo={props.redirectTo} />
        </div>
    )
}
