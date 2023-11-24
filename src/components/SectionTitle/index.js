import './SectionTitle.css'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const SectionTitle = ({ visibilidade, mudarVisibilidade }) => {
    return (
        <div className='section-title'>
            <div className='section-text'>
                <h1>Formulário</h1>
                <div className='tier-detail' style={{ backgroundColor: '#1C3887' }}></div>
            </div>
            <div className='icone-olho-background' onClick={mudarVisibilidade}>
                {visibilidade ? <IoEyeOutline className='olho'/> : <IoEyeOffOutline className='olho'/>}
            </div>
        </div>
    )
}

export default SectionTitle