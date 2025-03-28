import S from './queroDoar.module.scss';
import iconeLivro from '../../assets/IconeLivro.png';

import axios from 'axios';
import { useState } from 'react';

export default function QueroDoar() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem] = useState("")


    const enviarDados = async() => {

        const urlApi = ""

        const dadosEnviar = {
            titulo, 
            categoria, 
            autor, 
            imagem_url
        }

        await axios.post(urlApi,dadosEnviar)

        alert("Livro Enviado!")

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem("")

    }




    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
        console.log(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImagem(e.target.value)
    }

    


    return (
      <section className={S.queroDoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <section className={S.formulario}>
                <div>
                    <img src={iconeLivro} alt="Ícone livro decorativo" />
                    <p>
                        Informações do Livro
                    </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="titulo" id="titulo" placeholder="Título" onChange={capturaTitulo} value={titulo} />
                    <input type="text" name="categoria" id="categoria" placeholder="Categoria" onChange={capturaCategoria} value={categoria}/>
                    <input type="text" name="autor" id="autor" placeholder="Autor" onChange={capturaAutor} value={autor}/>
                    <input type="url" name="linkImagem" id="linkImagem" placeholder="Link da Imagem" onChange={capturaImagem} value={imagem_url} />
                    <input type="submit" value="Doar" className={S.botao} onClick={enviarDados}/>
                </form>
            </section>
        </section>
    );
  }