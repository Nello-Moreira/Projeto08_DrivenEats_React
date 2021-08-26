import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ReviewOrderButton(props) {
    const [isEnabled, setIsEnabled] = useState(true);

    return (
        <div className="bottom-button-container">
            <Button isEnabled={isEnabled} redirectTo={props.redirectTo}/>
        </div>
    )
}

function Button(props) {
    if (props.isEnabled) {
        return (
            <Link to={props.redirectTo}>
                <button className="confirmation-button enabled-button">
                    Fechar pedido
                </button>
            </Link>
        )
    }
    return (
        <button className="confirmation-button disabled-button">
            Selecione itens das 3 categorias para fechar o pedido
        </button>
    )
}
