import React, { createContext, useState, useEffect, useContext } from 'react';

const MeuContexto = createContext();

const MeuProvedor = ({ children }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Simulando a busca de dados de uma API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <MeuContexto.Provider value={dados}>
      {children}
    </MeuContexto.Provider>
  );
};

const MeuComponente = () => {
  const dadosDoContexto = useContext(MeuContexto);
  const [dadosDaApi, setDadosDaApi] = useState([]);

  useEffect(() => {
    // Simulando a busca de dados de uma API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setDadosDaApi(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dados do Contexto:</h2>
      <ul>
        {dadosDoContexto.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <h2>Dados da API:</h2>
      <ul>
        {dadosDaApi.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <MeuProvedor>
      <MeuComponente />
    </MeuProvedor>
  );
};

export default App;
