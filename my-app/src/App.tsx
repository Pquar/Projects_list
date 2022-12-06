import React, { useState } from 'react';
import './index.css';
import { OdsList } from './components/OdsList/OdsList';
import { Input } from './components/Input/Input';
import { Aside } from './components/Aside/Aside';
function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <header className="App-header"/>
      <Aside />
      <div className="max-2xl:ml-56 max-xl:ml-60">
        <div className="max-w-6xl mx-auto px-4 grid">
          <OdsList />
          <div className="mt-4 grid">
            <Input
              type="text"
              id="search"
              placeholder="Sua pesquisa"
              value={search}
              onChange={setSearch}
            />
            <div className="grid grid-cols-1 gap-1 container mt-4 bg-gray-200">
              <div className="grid grid-cols-4">
                <img
                  className="container col-span-2 max-w-xs max-h-80 justify-self-center"
                  src="/logo512.png"
                  alt="logo"
                />
                <div className="justify-self-end mr-2 col-span-2 ">
                  <div className="font-bold text-center">Titulo: {search}</div>
                  <div className="max-h-48 overflow-hidden">
                    Com a crescente demanda de produtos agrícolas, houve a ideia
                    de criar um sistema de compra e venda online, também
                    conhecida como e-commerce, com intuito de focar no nicho de
                    produtos agrícolas, esse sistema foi desenvolvido para
                    aproximar os pequenos produtores diretamente com a
                    comunidade e mostrar como funciona plataformas online de
                    e-commerce, o sistema contará com um cadastro para os
                    produtores que adicionaram os produtos, assim que
                    adicionados os clientes poderão fazer os pedidos.
                  </div>
                </div>
                <div className="">Pesquisa e Extensão</div>
                <div className="">ODS</div>
                <div className="">ANO</div>
                <div className="">Categoria de ensino </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
