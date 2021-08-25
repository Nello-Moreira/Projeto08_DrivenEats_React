import { Link } from "react-router-dom";

export default function ReviewOrderButton(props) {
    return (
        <div className="bottom-button-container">
            <Link to={props.redirectTo} onClick={element => element.preventDefault()}>
                <button className="confirmation-button disabled-button">
                    Selecione itens das 3 categorias para fechar o pedido
                </button>
            </Link>
        </div>
    )
}
