function NovoUsuarioComponent({ novoUsuario }) {
    return(
        <div className="novo-usuario">

            <div className="novo-usuario-topo">

                <div className="novo-usuario-icone">
                    <i className="fa-solid fa-user-check"></i>
                </div>

                <div>
                    <span>CADASTRO REALIZADO</span>
                    <h2>Novo usuário cadastrado</h2>
                </div>

            </div>

            <p className="novo-usuario-descricao">
                Os dados do novo usuário foram recebidos com sucesso.
            </p>

            <div className="novo-usuario-info">

                <p>
                    <strong>Nome</strong>
                    {novoUsuario.name}
                </p>

                <p>
                    <strong>Usuário</strong>
                    {novoUsuario.username}
                </p>

                <p>
                    <strong>E-mail</strong>
                    {novoUsuario.email}
                </p>

                <p>
                    <strong>Telefone</strong>
                    {novoUsuario.phone}
                </p>

            </div>

        </div>
    )
}

export default NovoUsuarioComponent;