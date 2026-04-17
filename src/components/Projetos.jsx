function Projetos() {
  const listaProjetos = [
    {
      id: 1,
      nome: "Sistema de Controle Agrícola",
      descricao: "React + Firebase pra gerenciar safra",
      link: "https://github.com/seuuser/projeto1"
    },
    {
      id: 2,
      nome: "Dashboard de Vendas",
      descricao: "Painel com gráficos usando Chart.js",
      link: "https://github.com/seuuser/projeto2"
    },
    {
      id: 3,
      nome: "App de Tarefas",
      descricao: "To-do list com localStorage",
      link: "https://github.com/seuuser/projeto3"
    }
  ]

  return (
    <section>
      <h2>Meus Projetos</h2>
      {listaProjetos.map((projeto) => (
        <div key={projeto.id}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
          <a href={projeto.link} target="_blank">Ver projeto</a>
        </div>
      ))}
    </section>
  )
}

export default Projetos