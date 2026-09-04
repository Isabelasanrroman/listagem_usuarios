import React from "react";
import UserCard from "./UserCard";

function UserListComponent({ usuarios }) {
    return (
        <ul className="lista-usuarios">

            {usuarios.map(usuario => (
                <UserCard
                    key={usuario.id}
                    usuario={usuario}
                />
            ))}

        </ul>
    );
}

export default UserListComponent;