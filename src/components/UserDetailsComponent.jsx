import React from "react";

function UserDetailsComponent({ usuario, onFecharDetalhes }) {
    return(
        <div className="modal-overlay">

            <div className="detalhes-usuario">

                <div className="detalhes-topo">

                    <div className="detalhes-titulo">

                        <div className="detalhes-titulo-icon">
                            <i className="fa-solid fa-user"></i>
                        </div>

                        <div>
                            <span>INFORMAÇÕES</span>
                            <h2>Detalhes do usuário</h2>
                        </div>

                    </div>

                    <button
                        className="fechar-detalhes"
                        onClick={onFecharDetalhes}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                </div>

                <div className="detalhes-lista">

                    <div className="detalhe-item">

                        <div className="detalhe-item-label">
                            <i className="fa-solid fa-user"></i>
                            <span>Nome</span>
                        </div>

                        <strong>{usuario.name}</strong>

                    </div>

                    <div className="detalhe-item">

                        <div className="detalhe-item-label">
                            <i className="fa-solid fa-envelope"></i>
                            <span>E-mail</span>
                        </div>

                        <strong>{usuario.email}</strong>

                    </div>

                    <div className="detalhe-item">

                        <div className="detalhe-item-label">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Cidade</span>
                        </div>

                        <strong>{usuario.address.city}</strong>

                    </div>

                    <div className="detalhe-item">

                        <div className="detalhe-item-label">
                            <i className="fa-solid fa-phone"></i>
                            <span>Telefone</span>
                        </div>

                        <strong>{usuario.phone}</strong>

                    </div>

                    <div className="detalhe-item">

                        <div className="detalhe-item-label">
                            <i className="fa-solid fa-globe"></i>
                            <span>Website</span>
                        </div>

                        <strong>{usuario.website}</strong>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default UserDetailsComponent;