import "./reviewOrderButton.css";
import { Link } from "react-router-dom";

export default function ReviewOrderButton({ isEnabled, redirectTo }) {
    return (
        <div className="bottom-button-container">
            <Button isEnabled={isEnabled} redirectTo={redirectTo} />
        </div>
    )
}

function Button({ isEnabled, redirectTo }) {
    return (
        isEnabled ?
            <Link to={redirectTo}>
                <button className="confirmation-button enabled-button">
                    Fechar pedido
                </button>
            </Link>
            :
            <button className="confirmation-button disabled-button">
                Selecione itens das 3 categorias para fechar o pedido
            </button>
    )
}
