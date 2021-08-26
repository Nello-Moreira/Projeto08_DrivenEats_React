import { Link } from "react-router-dom";

export default function OrderButtonsContainer(props) {
    return (
        <div className="order-buttons-container">
            <OrderButton />
            <CancelOrderButton redirectTo={props.redirectTo} />
        </div>
    )
}

function OrderButton() {
    return (
        <button className="confirmation-button enabled-button" >
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