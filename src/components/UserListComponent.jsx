import React from "react";
import UserCard from "./UserCard";

function UserListComponent({ usuarios, onSelecionarUsuario }) {
    return (
        <ul className="lista-usuarios">

            {usuarios.map(usuario => (
                <UserCard
                    key={usuario.id}
                    usuario={usuario}
                    onSelecionarUsuario={onSelecionarUsuario}
                />
            ))}

        </ul>
    );
}

export default UserListComponent;