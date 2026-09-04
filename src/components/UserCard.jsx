import React from "react";

function UserCard({ usuario }) {
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

        </li>
    );
}

export default UserCard;