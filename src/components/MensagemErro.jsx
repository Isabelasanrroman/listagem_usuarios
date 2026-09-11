import React from "react";

function MensagemErro({ mensagem }) {
    return (
        <div className="mensagem-erro">

            <div className="mensagem-icone">
                <i className="fa-solid fa-circle-exclamation"></i>
            </div>

            <div>
                <strong>Ocorreu um erro.</strong>
                <p>{mensagem}</p>
            </div>

        </div>
    );
}

export default MensagemErro;