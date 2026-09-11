import React from "react";

function MensagemSucesso({ mensagem }) {
    return (
        <div className="mensagem-sucesso">

            <div className="mensagem-icone">
                <i className="fa-solid fa-circle-check"></i>
            </div>

            <div>
                <strong>Sucesso!</strong>
                <p>{mensagem}</p>
            </div>

        </div>
    );
}

export default MensagemSucesso;