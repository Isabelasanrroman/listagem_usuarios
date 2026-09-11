import React from "react";

function UserCard({ usuario, onSelecionarUsuario }) {
    return (
        <li className="usuario-card">

            <div className="user-avatar">
                {usuario.name.charAt(0)}
            </div>

            <div className="user-information">

                <div className="user-name">
                    <strong>{usuario.name}</strong>

                    <span className="verified">
                        <i className="fa-solid fa-check"></i>
                    </span>
                </div>

            </div>

            <div className="card-arrow">
                <i className="fa-solid fa-chevron-right"></i>
            </div>

            <button
                className="botao-detalhes"
                onClick={() => {
                    onSelecionarUsuario(usuario.id)
                }}
            >
                Ver detalhes
            </button>

        </li>
    );
}

export default UserCard;