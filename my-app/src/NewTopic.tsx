export function NewTopic() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <form action="http://localhost:8000" method="post">
          <div className="grid grid-cols-2 gap-1">
            <label
              htmlFor="title"
              className="leading-loose border-l text-center mt-8 col-span-2"
            >
              Cadastre uma nova atividade
            </label>
            <input
              type="text"
              id="title"
              name="titleName"
              className="px-4 py-2 border rounded-lg my-2"
              placeholder="Titulo"
            />
            <input
              type="text"
              id="autor"
              name="autorName"
              className="px-4 py-2 border rounded-lg my-2 "
              placeholder="Autor(s)"
            />
            <textarea
              id="resume"
              className="px-4 py-2 border rounded-lg my-2 col-span-2"
              placeholder="Resumo"
            />
            <input
              type="file"
              id="arquivo"
              name="arquivoName"
              className="px-4 py-2 border rounded-lg my-2"
              placeholder="file"
            />
            <input
              type="number"
              id="ano"
              name="anoName"
              className="px-4 py-2 border rounded-lg my-2"
              placeholder="Ano"
            />
            <select className="w-52 p-2 mb-2 border rounded-lg">
              <option value="0">Pesquisa, Ensino ou Extensão</option>
              <option value="1">Pesquisa</option>
              <option value="2">Ensino</option>
              <option value="3">Extensão</option>
            </select>
            <select className="w-52 p-2 mb-2 border rounded-lg">
              <option value="0">
                Grau do Trabalho: Ensino Médio, Ensino Superior:
              </option>
              <option value="1">Ensino Médio</option>
              <option value="2">Superior</option>
            </select>
            <select className="w-52 p-2 mb-2 border rounded-lg">
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
              <option value="12">
                ODS 12 – Consumo e produção responsáveis
              </option>
              <option value="13">
                ODS 13 – Ação contra a mudança do clima
              </option>
              <option value="14">ODS 14 – Vida na água</option>
              <option value="15">ODS 15 – Vida terrestre</option>
              <option value="16">
                ODS 16 – Paz, justiça e instituições sólidas
              </option>
            </select>
            <div className="col-span-2">
              <button className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 middle	">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
