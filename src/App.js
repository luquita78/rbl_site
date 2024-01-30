import './App.css';
import Menu from './components/Menu/menu';
import TelaInicial from './components/Tela_inicial/tela_inicial';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Menu/>
      </header>
      <TelaInicial/>
    </div>
  );
}

export default App;
