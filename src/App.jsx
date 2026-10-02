import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

import HeaderComponent from "./components/HeaderComponent";
import LoadingComponent from "./components/LoadingComponent";
import UserListComponent from "./components/UserListComponent";

import "./App.css";
import UserDetailsComponent from "./components/UserDetailsComponent";
import UserForm from "./components/UserForm";
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
    const [mostrarCadastro, setMostrarCadastro] = useState(false)

    const usuariosFiltrados = usuarios.filter(
        filtrarUsuarioPorTempo(busca)
    );

    async function buscarUsuario(id) {
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.id === id
        );

        if (usuarioEncontrado) {
            setUsuarioSelecionado(usuarioEncontrado);
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

    function excluirUsuario(id) {
        setUsuarios((usuariosAtuais) =>
        usuariosAtuais.filter((usuario) => usuario.id !== id)
        );
    }

    
    async function cadastrarUsuario(usuario) {

        if (
            !usuario.name.trim() ||
            !usuario.username.trim() ||
            !usuario.email.trim() ||
            !usuario.phone.trim()
        ) {

            setMensagemSucesso(null);
            setMensagemErro(
                "Preencha todos os campos antes de cadastrar o usuário."
            );
            return;
        }
        try {
            const response = await axios.post(
                `${url}/users`, usuario
            );

            const data = response.data;
            setUsuarios((usuariosAtuais) => [
                ...usuariosAtuais,
                data
            ]);
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

                        <div className="area-cadastro">
                            <button
                                className="botao-abrir-cadastro"
                                onClick={() => setMostrarCadastro(true)}
                            >
                                <i className="fa-solid fa-user-plus"></i>
                                    Cadastrar Usuários
                                <span>+</span>
                            </button>
                        </div>

                        {mensagemSucesso && (
                            <MensagemSucesso mensagem={mensagemSucesso} />
                        )}

                        {mensagemErro && (
                            <MensagemErro mensagem={mensagemErro} />
                        )}

                        {usuariosFiltrados.length > 0 ? (
                            <UserListComponent  
                                usuarios={usuariosFiltrados}  
                                onSelecionarUsuario={buscarUsuario}
                                onExcluirUsuario={excluirUsuario}
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

                    </>
                )}

                {mostrarCadastro && (
                    <div className="modal-overlay modal-cadastro-overlay">
                        <div className="modal-cadastro">

                            <button
                                className="fechar-cadastro"
                                onClick={() => setMostrarCadastro(false)}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                            <UserForm
                                onCadastrar={(usuario) => {
                                    cadastrarUsuario(usuario);
                                    setMostrarCadastro(false);
                                }}
                            />

                        </div>
                    </div>
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