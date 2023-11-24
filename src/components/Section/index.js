import './Section.css';
import Card from './../Card/index';

const Section = ({ corPrimaria, titulo, passandoRespostas, botaoClicado, mudandoCor, id }) => {
    return (
        passandoRespostas.length > 0 &&
        <section className='tier' style={{ backgroundImage: 'url(/images/fundo.png', backgroundColor: `${corPrimaria}88` }} >
            <h3>{titulo}</h3>
            <div className='tier-detail' style={{ backgroundColor: corPrimaria }}></div>
            <input 
                type='color'
                className='input-cor'
                value={corPrimaria}
                onChange={e => mudandoCor(e.target.value, id)}
            />
            <div className='tier-card-container'>
                {passandoRespostas.map(resposta => {
                    return <Card
                        key={resposta.nome}
                        nome={resposta.nome}
                        id={resposta.id}
                        imagem={resposta.imagem}
                        botaoClicado={botaoClicado}
                    />
                })}
            </div>
        </section>
    )
}

export default Section
