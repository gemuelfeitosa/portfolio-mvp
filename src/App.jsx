import Header from './components/Header'
import Projetos from './components/Projetos'
import './App.css'

function App() {
  return (
    <div style={{ color: 'black', backgroundColor: 'white', minHeight: '100vh', padding: '20px' }}>
      <Header />
      <Projetos />
    </div>
  )
}

export default App