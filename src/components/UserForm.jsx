import { useState } from "react";

function UserForm({ onCadastrar }) {

    const [nome, setNome] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    function handleSubmit(evento) {

        evento.preventDefault();

        const novoUsuario = {
            name: nome,
            username: username,
            email: email,
            phone: telefone,
        };

        onCadastrar(novoUsuario);

        limparformulario();
    }

    function limparformulario() {

        setNome("");
        setUsername("");
        setEmail("");
        setTelefone("");
    }

    return (
        <form className="form-cadastro" onSubmit={handleSubmit}>

            <div className="form-cabecalho">

                <div className="form-icone">
                    <i className="fa-solid fa-user-plus"></i>
                </div>

                <div>
                    <span className="form-legenda">
                        NOVO CADASTRO
                    </span>

                    <h2>
                        Cadastrar usuário
                    </h2>

                    <p>
                        Preencha os dados abaixo para adicionar um novo usuário.
                    </p>
                </div>

            </div>

            <div className="form-grupo">

                <label>
                    <i className="fa-solid fa-user"></i>
                    Nome
                </label>

                <input
                    type="text"
                    placeholder="Digite o nome"
                    value={nome}
                    onChange={(evento) => {
                        setNome(evento.target.value);
                    }}
                />

            </div>

            <div className="form-grupo">

                <label>
                    <i className="fa-solid fa-at"></i>
                    Username
                </label>

                <input
                    type="text"
                    placeholder="Digite o username"
                    value={username}
                    onChange={(evento) => {
                        setUsername(evento.target.value);
                    }}
                />

            </div>

            <div className="form-grupo">

                <label>
                    <i className="fa-solid fa-envelope"></i>
                    E-mail
                </label>

                <input
                    type="email"
                    placeholder="Digite o e-mail"
                    value={email}
                    onChange={(evento) => {
                        setEmail(evento.target.value);
                    }}
                />

            </div>

            <div className="form-grupo">

                <label>
                    <i className="fa-solid fa-phone"></i>
                    Telefone
                </label>

                <input
                    type="text"
                    placeholder="Digite o telefone"
                    value={telefone}
                    onChange={(evento) => {
                        setTelefone(evento.target.value);
                    }}
                />

            </div>

            <button className="botao-cadastrar" type="submit">
                <i className="fa-solid fa-plus"></i>
                Cadastrar usuário
            </button>

        </form>
    );
}

export default UserForm;