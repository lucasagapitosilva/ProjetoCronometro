import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      iniciar: 'Iniciar'
    }
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;

      this.setState({ iniciar: 'Iniciar' })
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1
        state.iniciar = 'Pausar'

        this.setState(state);
        
      }, 100);
    }
  }

  limpar() {
    clearInterval(this.timer);
    this.timer = null;

    this.setState({ iniciar: 'Iniciar' })
    this.setState({ numero: 0 });
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={require('./assets/crono.png')} />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.vai}>{this.state.iniciar}</a>
          <a className="botao" onClick={this.limpar}>Limpar</a>
        </div>
      </div>
    );
  }
}

export default App;
