import './App.css';
import Menu from './components/Menu/menu';
import Tela_inicial from './components/Tela_inicial/tela_inicial';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Menu/>
      </header>
      <section className='pagina-inicial'>
        <Tela_inicial/>

      </section>
      
    </div>
  );
}

export default App;
