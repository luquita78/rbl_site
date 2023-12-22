import logo from './logo.svg';
import './App.css';
import Tela_inicial from './components/Tela_inicial/tela_inicial';
import Menu from './components/Menu/menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Tela_inicial/> 
    </div>
  );
}

export default App;
