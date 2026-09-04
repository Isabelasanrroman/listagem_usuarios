import React from "react";

function LoadingComponent() {
    return (
        <div className="loading-card">

            <div className="loading-icon">
                <i className="fa-solid fa-users"></i>
            </div>

            <div className="loading-content">
                <h2>Carregando usuários</h2>

                <p>
                    Buscando informações, aguarde um pouquinho...
                </p>

                <div className="loading-bar">
                    <div></div>
                </div>
            </div>

            <i className="fa-solid fa-sparkles loading-sparkle"></i>

        </div>
    );
}

export default LoadingComponent;