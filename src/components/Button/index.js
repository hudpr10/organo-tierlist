import './Button.css';
import { IoAdd } from "react-icons/io5";

const Button = ({ placeholder }) => {
    return (
        <button className='button-container'>
            {placeholder}
            <IoAdd className='icone-adicionar'/>
        </button>
    )
}

export default Button
