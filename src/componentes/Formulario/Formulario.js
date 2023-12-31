import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSupensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botao/Botao.js'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalva = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalva}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSupensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario