import './Card.css';
import { TiDelete } from "react-icons/ti";

const Card = ({ imagem, nome, botaoClicado, id }) => {
    return (
        <div className='item-container'>
            <span>
                {nome}
                <TiDelete className='icone-remover' onClick={e => botaoClicado(id)}/>
            </span>
            <img src={imagem} alt={nome}/>
        </div>
    )
}

export default Card
