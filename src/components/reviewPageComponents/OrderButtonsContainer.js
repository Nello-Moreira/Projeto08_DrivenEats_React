import "./orderButtons.css";
import { Link, useHistory } from "react-router-dom";
import getTotalCost from "../../auxiliar/totalCost"

export default function OrderButtonsContainer({ selectedOptions, redirectTo }) {
    return (
        <div className="order-buttons-container">
            <OrderButton redirectTo={redirectTo} selectedOptions={selectedOptions} />
            <CancelOrderButton redirectTo={redirectTo} />
        </div>
    )
}

function sendWhatsAppMessage(selectedOptions) {
    const getSectionInfos = (section) => (
        selectedOptions[section]
            .map(item => item.itemQuantity > 1 ? (item.name + ` (${item.itemQuantity}x)`) : (item.name))
            .join(', ')
    );
    const message = (
        `Olá, gostaria de fazer o pedido:\n`
        + `- Prato: ${getSectionInfos("meal")}\n`
        + `- Bebida: ${getSectionInfos("drink")}\n`
        + `- Sobremesa: ${getSectionInfos("dessert")}\n`
        + `Total: ${getTotalCost(selectedOptions)}`
    );
    const link = "https://wa.me/5521999812307?text=" + encodeURIComponent(message);

    window.open(link, "_blank");
}

function OrderButton({ redirectTo, selectedOptions }) {
    const history = useHistory();

    function resetApp() {
        history.push(redirectTo);
        window.location.reload();
    }
    return (
        <button className="confirmation-button enabled-button" onClick={() => {
            sendWhatsAppMessage(selectedOptions);
            resetApp();
        }}>
            Tudo certo, pode pedir!
        </button>
    )
}

function CancelOrderButton({ redirectTo }) {
    return (
        <Link to={redirectTo}>
            <button className="cancel-button" >
                Cancelar
            </button>
        </Link>
    )
}
