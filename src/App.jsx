import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

import HeaderComponent from "./components/HeaderComponent";
import LoadingComponent from "./components/LoadingComponent";
import UserListComponent from "./components/UserListComponent";

import "./App.css";
import UserDetailsComponent from "./components/UserDetailsComponent";
import UserForm from "./components/UserForm";
import NovoUsuarioComponent from "./components/NovoUsuarioComponent";
import MensagemSucesso from "./components/MensagemSucesso";
import MensagemErro from "./components/MensagemErro";

const filtrarUsuarioPorTempo = (termo) => (usuario) => {
    const termoLower = termo.toLowerCase();

    return (
        usuario.name.toLowerCase().includes(termoLower) ||
        usuario.username.toLowerCase().includes(termoLower) ||
        usuario.email.toLowerCase().includes(termoLower)
    );
};

function App() {
    const url = "https://jsonplaceholder.typicode.com";

    const [usuarios, setUsuarios] = useState([]);
    const [erro, setErro] = useState(null);
    const [mensagemSucesso, setMensagemSucesso] = useState(null);
    const [mensagemErro, setMensagemErro] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [busca, setBusca] = useState("");
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
    const [novoUsuario, setNovoUsuario] = useState(null)

    const usuariosFiltrados = usuarios.filter(
        filtrarUsuarioPorTempo(busca)
    );

    async function buscarUsuario(id) {
        try {
            const response = await axios.get(
                `${url}/users/${id}`
            )
            const data = response.data
            setUsuarioSelecionado(data)
        } catch (error) {
            console.log("Erro ao buscar usuário: ", error)
        }
    }

    async function buscarUsuarios() {
        try {
            setCarregando(true);

            const response = await axios.get(
                `${url}/users`
            );

            const data = response.data;
            setUsuarios(data);

        } catch (error) {
            console.log("Erro ao buscar usuários: ", error);

            setErro(
                `Não foi possível carregar os usuários. Código: ${error.message}`
            );

            setUsuarios([]);

        } finally {
            setCarregando(false);
        }
    }

    function limparDetalhesUsuario() {
        setUsuarioSelecionado(null);
    }

    async function cadastrarUsuario(usuario) {
    try {
        const response = await axios.post(
            `${url}/users`, usuario
        );

        const data = response.data;

        setNovoUsuario(data);

        setMensagemErro(null);

        setMensagemSucesso("Usuário cadastrado com sucesso!");

    } catch (error) {
        console.log("Erro cadastrar usuário: ", error);

        setMensagemSucesso(null);

        setMensagemErro(
            "Não foi possível cadastrar o usuário."
        );
    }
}

    useEffect(() => {
        buscarUsuarios();
    }, []);

    return (
        <div className="app">

            <div className="background-decoration decoration-one"></div>
            <div className="background-decoration decoration-two"></div>
            <div className="background-decoration decoration-three"></div>

            <main className="container">

                <HeaderComponent
                    busca={busca}
                    setBusca={setBusca}
                />

                {carregando && (
                    <LoadingComponent />
                )}

                <p className="usuarios-encontrados">
                    Usuários encontrados: {usuariosFiltrados.length}
                </p>

                {erro && (
                    <MensagemErro mensagem={erro} />
                )}

                {!carregando && !erro && (
                    <>
                        <p className="quantidade-usuarios">
                            {usuariosFiltrados.length} usuario(s) encontrado(s)
                        </p>

                        {usuariosFiltrados.length > 0 ? (
                            <UserListComponent
                                usuarios={usuariosFiltrados}
                                onSelecionarUsuario={buscarUsuario}
                            />
                        ) : (
                            <div className="empty-message">
                                <div className="empty-icon">
                                    <i className="fa-solid fa-user-slash"></i>
                                </div>

                                <h2>Nenhum usuário encontrado</h2>

                                <p>
                                    Tente pesquisar por outro nome,
                                    usuário ou e-mail.
                                </p>
                            </div>
                        )}

                        {usuarioSelecionado && (
                            <UserDetailsComponent
                                usuario={usuarioSelecionado}
                                onFecharDetalhes={limparDetalhesUsuario}
                            />
                        )}
                        <UserForm onCadastrar={cadastrarUsuario}/>

                        {mensagemSucesso && (
                            <MensagemSucesso mensagem={mensagemSucesso} />
                        )}

                        {mensagemErro && (
                            <MensagemErro mensagem={mensagemErro} />
                        )}

                        {novoUsuario && (
                            <NovoUsuarioComponent novoUsuario={novoUsuario}/>
                        )}

                    </>
                )}

                <footer className="footer">
                    <i className="fa-solid fa-heart"></i>
                    Catálogo de Usuários
                </footer>

            </main>
        </div>
    );
}

export default App;