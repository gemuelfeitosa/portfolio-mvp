function Header() {
  function mostrarContato() {
    alert('Manda um email pra: gemuelfeitosas14@gmail.com')
  }

  return (
    <header>
      <h1>Gemuel Castro</h1>
      <p>Desenvolvedor React | Adeus Bode.js</p>
      <button onClick={mostrarContato}>
        Me contrata
      </button>
    </header>
  )
}

export default Header
