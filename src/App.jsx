
// App.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Outros componentes virão aqui */}
      <Footer />
    </div>
  );
}

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Destino from './Destino';

function App() {
  const destinos = [
    { nome: 'Paris', descricao: 'A cidade do amor.' },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.' },
    { nome: 'Tóquio', descricao: 'A capital do Japão.' }
  ];

  return (
    <div className="App">
      <Header />
      {destinos.map((destino, index) => (
        <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
      ))}
      <Footer />
    </div>
  );
}

function App() {
  const [destinos, setDestinos] = useState([
    { nome: 'Paris', descricao: 'A cidade do amor.' },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.' },
    { nome: 'Tóquio', descricao: 'A capital do Japão.' }
  ]);

  const adicionarDestino = (novoDestino) => {
    setDestinos([...destinos, novoDestino]);
  };

  return (
    <div className="App">
      <Header />
      <FormDestino adicionarDestino={adicionarDestino} />
      {destinos.map((destino, index) => (
        <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
      ))}
      <Footer />
    </div>
  );
}

// App.jsx (modificado)
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Destino from './Destino';
import FormDestino from './FormDestino';

function App() {
  const [destinos, setDestinos] = useState([
    { nome: 'Paris', descricao: 'A cidade do amor.' },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.' },
    { nome: 'Tóquio', descricao: 'A capital do Japão.' }
  ]);

  const adicionarDestino = (novoDestino) => {
    setDestinos([...destinos, novoDestino]);
  };

  return (
    <div className="App">
      <Header />
      <FormDestino adicionarDestino={adicionarDestino} />
      {destinos.map((destino, index) => (
        <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
      ))}
      <Footer />
    </div>
  );
}

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Destinos from './Destinos';
import Contato from './Contato';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('Home');

  const renderPagina = () => {
    switch (paginaAtual) {
      case 'Home':
        return <Home />;
      case 'Destinos':
        return <Destinos />;
      case 'Contato':
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header />
      <nav>
        <button onClick={() => setPaginaAtual('Home')}>Home</button>
        <button onClick={() => setPaginaAtual('Destinos')}>Destinos</button>
        <button onClick={() => setPaginaAtual('Contato')}>Contato</button>
      </nav>
      {renderPagina()}
      <Footer />
    </div>
  );
}



export default App;