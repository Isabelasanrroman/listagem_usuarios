import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

import HeaderComponent from "./components/HeaderComponent";
import LoadingComponent from "./components/LoadingComponent";
import UserListComponent from "./components/UserListComponent";

import "./App.css";

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
    const [carregando, setCarregando] = useState(true);
    const [busca, setBusca] = useState("");

    const usuariosFiltrados = usuarios.filter(
        filtrarUsuarioPorTempo(busca)
    );

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
                    <p className="mensagem-erro">
                        {erro}
                    </p>
                )}

                {!carregando && !erro && (
                    <>
                        <p className="quantidade-usuarios">
                            {usuariosFiltrados.length} usuario(s) encontrado(s)
                        </p>

                        {usuariosFiltrados.length > 0 ? (
                            <UserListComponent
                                usuarios={usuariosFiltrados}
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