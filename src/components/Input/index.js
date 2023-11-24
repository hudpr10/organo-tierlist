import './Input.css'

const Input = ({ label, placeholder, obrigatorio, recebendoValorDigitado, valor, tipo = 'text' }) => {
    return (
        <div className='input'>
            <label>{label}</label>
            <input 
                type={tipo}
                placeholder={placeholder} 
                required={obrigatorio} 
                onChange={e => recebendoValorDigitado(e.target.value)}
                value={valor}
            />
        </div>
    )
}

export default Input
