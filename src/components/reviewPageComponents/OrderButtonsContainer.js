import "./orderButtons.css";
import { Link, useHistory } from "react-router-dom";
import getTotalCost from "../../auxiliar/totalCost"

function sendWhatsAppMessage(allSections) {
    const getSectionInfos = (section) => (
        allSections[section]
            .map(item => (item.name + `(${item.itemQuantity}x)`))
            .join(', ')
    );
    const message = (
        `Olá, gostaria de fazer o pedido:\n`
        + `- Prato: ${getSectionInfos("meal")}\n`
        + `- Bebida: ${getSectionInfos("drink")}\n`
        + `- Sobremesa: ${getSectionInfos("dessert")}\n`
        + `Total: ${getTotalCost(allSections)}`
    );
    const link = "https://wa.me/5521999812307?text=" + encodeURIComponent(message);

    window.open(link, "_blank");
}

function OrderButton(props) {
    const history = useHistory();
    
    function resetApp() {
        history.push(props.redirectTo);
        window.location.reload();
    }
    return (
        <button className="confirmation-button enabled-button" onClick={() => {
            sendWhatsAppMessage(props.allSections);
            resetApp();
        }}>
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
            <OrderButton redirectTo={props.redirectTo} allSections={props.allSections} />
            <CancelOrderButton redirectTo={props.redirectTo} />
        </div>
    )
}
