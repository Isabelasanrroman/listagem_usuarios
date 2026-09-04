import React from "react";

function HeaderComponent({ busca, setBusca }) {
    return (
        <header className="header">
            <div className="header-top">
                <div className="logo">

                    <div className="logo-icon">
                        <i className="fa-solid fa-users"></i>
                    </div>

                    <div>
                        <span className="logo-small">
                            SISTEMA
                        </span>

                        <h1>
                            Catálogo de Usuários
                        </h1>
                    </div>

                </div>

                <div className="header-decoration">
                    <i className="fa-solid fa-sparkles"></i>
                </div>

            </div>

            <div className="header-description">
                <i className="fa-regular fa-heart"></i>

                <span>
                    Encontre usuários de forma rápida e simples.
                </span>
            </div>

            <div className="search-container">

                <i className="fa-solid fa-magnifying-glass search-icon"></i>

                <input
                    className="input-busca"
                    type="text"
                    placeholder="Filtrar usuário..."
                    value={busca}
                    onChange={(evento) => {
                        setBusca(evento.target.value);
                    }}
                />

                {busca && (
                    <button
                        className="clear-search"
                        onClick={() => setBusca("")}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                )}
            </div>
        </header>
    );
}

export default HeaderComponent;