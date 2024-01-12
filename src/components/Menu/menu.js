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
                    <li className='botaoParceiros'><p>Parceiros</p></li>
                    <li className='botaoQuemSomos'><p>Quem Somos</p></li>
                    <li className='botaoServicos'><p>Serviços</p></li>
                    <li className='botaoContato'><p>Contato</p></li>
                </ul> 
                
            </div>
        </div>
        </header>
    );
};

export default Menu;