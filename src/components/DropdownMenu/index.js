import './DropdownMenu.css';

const DropdownMenu = ({ categoriasTitulos, mudandoValor, valor }) => {
    return (
        <div className='dropdown'>
            <label>Categoria</label>
            <select onChange={e => mudandoValor(e.target.value)} value={valor}>
                {categoriasTitulos.map(titulo => <option key={titulo}>{titulo}</option>)}
            </select>
        </div>
    )
}

export default DropdownMenu
