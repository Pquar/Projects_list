export function Aside() {
  return (
    <aside className="ml-0 max-2xl:ml-0 absolute left-auto w-60 overflow-x-hidden z-10">
      <div className="flex-none min-w-min ">
        <div className="flex flex-col items-center p-4  justify-center  bg-gray-100 ">
          <select className="w-52 p-2 mb-2"> 
            <option value="0">Categoria Ensino, Pesquisa ou Extensão:</option>
            <option value="1">Ensino</option>
            <option value="2">Pesquisa</option>
            <option value="3">Extensão</option>
          </select>
          <select className="w-52 p-2 mb-2">
            <option value="0">
              Grau do Trabalho: Ensino Médio, Ensino Superior:
            </option>
            <option value="1">Ensino Médio</option>
            <option value="2">Superior</option>
          </select>
          <select className="w-52 p-2 mb-2">
            <option value="0">ODS:</option>
            <option value="1">ODS 1 – Erradicação da pobreza</option>
            <option value="2">
              ODS 2 – Fome zero e agricultura sustentável
            </option>
            <option value="3">ODS 3 – Saúde e bem-estar</option>
            <option value="4">ODS 4 – Educação de qualidade</option>
            <option value="5">ODS 5 – Igualdade de gênero</option>
            <option value="6">ODS 6 – Água limpa e saneamento</option>
            <option value="7">ODS 7 – Energia acessível e limpa</option>
            <option value="8">
              ODS 8 – Trabalho decente e crescimento econômico
            </option>
            <option value="9">
              ODS 9 – Indústria, inovação e infraestrutura
            </option>
            <option value="10">ODS 10 – Redução das desigualdades</option>
            <option value="11">
              ODS 11 – Cidades e comunidades sustentáveis
            </option>
            <option value="12">ODS 12 – Consumo e produção responsáveis</option>
            <option value="13">ODS 13 – Ação contra a mudança do clima</option>
            <option value="14">ODS 14 – Vida na água</option>
            <option value="15">ODS 15 – Vida terrestre</option>
            <option value="16">
              ODS 16 – Paz, justiça e instituições sólidas
            </option>
            <option value="17">ODS 17 – Parcerias para os objetivos</option>
          </select>
          <select className="w-52 p-2 mb-2"> 
            <option value="0">Ano</option>
            <option value="1">2022</option>
            <option value="2">2021</option>
            <option value="3">2020</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
