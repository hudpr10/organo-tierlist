import Banner from './components/Banner';
import './App.css';
import Form from './components/Form';
import Section from './components/Section/index';
import { useEffect, useState } from 'react';
import Warning from './components/Warning';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
import SectionTitle from './components/SectionTitle';

function App() {
  const [ranks, setRanks] = useState([
    {
      titulo: 'Rank S',
      corPrimaria: '#FF4040',
      id: uuidv4()
    },
    {
      titulo: 'Rank A',
      corPrimaria: '#FF7A00',
      id: uuidv4()
    },
    {
      titulo: 'Rank B',
      corPrimaria: '#F4CE14',
      id: uuidv4()
    },
    {
      titulo: 'Rank C',
      corPrimaria: '#68C63C',
      id: uuidv4()
    },
    {
      titulo: 'Rank D',
      corPrimaria: '#6BAFFF',
      id: uuidv4()
    }
  ])

  const [listaRespostas, setListaRespostas] = useState([])

  const botaoClicado = (id) => {
    setListaRespostas(listaRespostas.filter(lista => lista.id !== id))
  }

  const mudarCorSessao = (cor, id) => {
    setRanks(ranks.map(cadaRank => {
      if (cadaRank.id === id) {
        cadaRank.corPrimaria = cor
      }
      return cadaRank
    }))
  }

  const [visibilidade, setVisibilidade] = useState(true)
  const aoRemover = () => {
    setVisibilidade(!visibilidade)
  }

  return (
    <div className="App">
      <Banner />
      <SectionTitle
        visibilidade={visibilidade}
        mudarVisibilidade={aoRemover}
      />
      {visibilidade
        ? <Form
          categoriasTitulos={ranks.map(cadaRank => cadaRank.titulo)}
          recebendoRespostas={e => setListaRespostas([...listaRespostas, { ...e, id: uuidv4() }])}
          criandoCategoria={e => setRanks([...ranks, { ...e, id: uuidv4() }])}
        />
        : ''}
      {ranks.map((cadaRank) =>
        <Section
          key={cadaRank.titulo}
          titulo={cadaRank.titulo}
          corPrimaria={cadaRank.corPrimaria}
          passandoRespostas={listaRespostas.filter(respostas => respostas.categoria === cadaRank.titulo)}
          id={cadaRank.id}
          botaoClicado={botaoClicado}
          mudandoCor={(cor, id) => mudarCorSessao(cor, id)}
        />)}
      {listaRespostas.length === 0 &&
        <Warning />
      }
      <Footer />
    </div>
  );
}

export default App;
