import { useState } from 'react';
import Button from '../Button';
import DropdownMenu from '../DropdownMenu';
import Input from '../Input';
import './Form.css';


const Form = ({ categoriasTitulos, recebendoRespostas, criandoCategoria }) => {
    const [nomeItem, setNomeItem] = useState('')
    const [imagemItem, setImagemItem] = useState('')
    const [categoriaItem, setCategoriaItem] = useState('Rank S')
    const [paginaForm, setPaginaForm] = useState('item')
    const [novoRank, setNovoRank] = useState('')
    const [novaCor, setNovaCor] = useState('#000000')

    const quandoSalvar = (e) => {
        e.preventDefault();

        recebendoRespostas({
            nome: nomeItem,
            imagem: imagemItem,
            categoria: categoriaItem
        })

        setNomeItem('')
        setImagemItem('')
        setCategoriaItem('Rank S')
    }

    const criarNovaCategoria = (e) => {
        e.preventDefault()

        criandoCategoria({
            titulo: novoRank,
            corPrimaria: novaCor
        })

        setNovoRank('')
        setNovaCor('#000000')
    }

    const paginaItem = () => {
        setPaginaForm('item')
    }

    const paginaCategoria = () => {
        setPaginaForm('categoria')
    }

    return (
        <div className='formulario-container'>
            <div className='botoes-topo__container'>
                <button className={`botao-pagina ${paginaForm === 'item' ? 'botao-ativo' : ''}`} onClick={paginaItem}>Adicionando Item</button>
                <button className={`botao-pagina ${paginaForm === 'categoria' ? 'botao-ativo' : ''}`} onClick={paginaCategoria}>Adicionando Categoria</button>
            </div>
            {
                paginaForm === 'item' &&
                <form onSubmit={quandoSalvar}>
                    <Input
                        label='Nome'
                        placeholder='Adicione o nome item...'
                        obrigatorio={true}
                        recebendoValorDigitado={e => setNomeItem(e)}
                        valor={nomeItem}
                    />
                    <Input
                        label='Imagem'
                        placeholder='Adicione o endereço da imagem...'
                        obrigatorio={false}
                        recebendoValorDigitado={e => setImagemItem(e)}
                        valor={imagemItem}
                    />
                    <DropdownMenu
                        categoriasTitulos={categoriasTitulos}
                        mudandoValor={e => setCategoriaItem(e)}
                        valor={categoriaItem}
                    />
                    <Button placeholder='Adicionar' />
                </form>
            }
            {
                paginaForm === 'categoria' &&
                <form onSubmit={criarNovaCategoria}>
                    <Input
                        label='Rank'
                        placeholder='Adicione um novo rank...'
                        obrigatorio={true}
                        tipo='text'
                        recebendoValorDigitado={e => setNovoRank(e)}
                        valor={novoRank}
                    />
                    <Input
                        label='Cor'
                        tipo='color'
                        obrigatorio={true}
                        recebendoValorDigitado={e => setNovaCor(e)}
                        valor={novaCor}
                    />
                    <Button placeholder='Adicionar' />
                </form>
            }
        </div>
    )
}

export default Form
