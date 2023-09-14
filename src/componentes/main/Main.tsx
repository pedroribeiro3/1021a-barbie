import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {
    //let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
    //específicas
    const [texto,setTexto]=useState("")

    const filmes:FilmeType[] = [
        {
            id:1,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png',
        },
        {
            id: 2,
            titulo:'Barbie: Fairytopia',
            sinopse:'Logo após o arco-íris, em um mundo chamado Fairytopia, vive Elina, uma bela fada das flores que sonha em ter asas. Um dia, Elina percebe que sua casa de flor está doente e seus amigos não podem mais voar. Cheia de coragem, ela parte em uma fantástica jornada para encontrar Azura, a guardiã da Cidade das Fadas, já que ela não é afetada pelo feitiço que causou todos os problemas.',
            imagem:'/fairytopia.jpg',
        },
        {   
            id: 3,
            titulo:'Barbie: Segredo das Fadas',
            sinopse: "Mundos mágicos, fadas e cavalos voadores são alguns dos elementos encontrados neste filme da Barbie. Ela precisa viajar a um mundo encantado para salvar Ken. Nesta aventura, serão revelados segredos e algumas amizades serão testadas.",
            imagem:'/segredo-das-fadas.jpg',
        }
    ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }

    return (
        <>
            <div className="campo-de-pesquisa">
                <p>Buscar um filme:</p>
                <input type="text" placeholder='Pesquisar...' onChange={TrataTexto} />
                       {texto && <p>Resultados para: {texto} </p>}
            </div>
            <main className="content-main">
                {   
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }
            </main>
        </>
    )
}