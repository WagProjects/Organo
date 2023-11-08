import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSupensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botao/Botao.js'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalva = (evento) =>{
        evento.preventDefault()
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalva}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSupensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario