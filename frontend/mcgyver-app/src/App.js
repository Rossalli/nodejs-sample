import React, {Component} from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import TipBox from './Tip';

class App extends Component {
        constructor() {
        super();
    }


    render() {
    return (
        <div id="layout">
            <a href="#menu" id="menuLink" className="menu-link">
                <span></span>
            </a>

            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="#">Mcgyver-IT</a>

                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link"></a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link"></a></li>
                    </ul>
                </div>
            </div>

            <div id="main">
                <div className="header">
                    <h1>McGyver IT</h1>
                    <h2>Dicas de ferramentas úteis para desenvolvedores</h2>
                </div>
                <div className="content" id="content">
                    <TipBox/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
