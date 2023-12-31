import "./menu.css";
import logo from '../../imagens/LOGO.png'

function Menu () {
    return (
        <header>
        <div className="Menu">
            <div className="logoMenu">
                <img src={logo} alt='logo rbl filmes'className='imagem'></img>
            </div>
            <div>
               <ul className ="botoesMenu">
                    <li className='botao'><p>Parceiros</p></li>
                    <li className='botao'><p>Quem Somos</p></li>
                    <li className='botao'><p>Serviços</p></li>
                    <li className='botao'><p>Contato</p></li>
                </ul> 
                
            </div>
        </div>
        </header>
    );
};

export default Menu;