import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filme from './../filme/Filme'
import './Main.css'

interface FilmeType {
  id: number;
  titulo: string;
  sinopse: string;
  foto: string;
}

export default function Main() {
  const [texto, setTexto] = useState<string>("");
  const [filmes, setFilmes] = useState<FilmeType[]>([]);

  const buscarFilmes = async () => {
    try {
      const resposta = await axios.get<FilmeType[]>("http://localhost:3000/filmes");
      setFilmes(resposta.data);
    } catch (error) {
      console.log("Erro na busca");
    }
  };

  useEffect(() => {
    buscarFilmes();
  }, []);

  function trataTexto(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }

  return (
    <>
      <div className="campo-de-pesquisa">
        <div >
          <input  type="text"  placeholder="Encontre o filme desejado..." onChange={trataTexto} />
        </div>
        {(texto) ? <p>Resultados para: {texto}</p> : ""}
      </div>

      <main className="content-main">
        {filmes
          .filter((filme) => filme.titulo.replace(/\s/g, '').toLowerCase().includes(texto.replace(/\s/g, '').toLowerCase()))
          .map((filme) =>
            <Filme
              key={filme.id} sinopse={filme.sinopse} titulo={filme.titulo} foto={filme.foto}
            />
          )}
      </main>
    </>
  );
}
