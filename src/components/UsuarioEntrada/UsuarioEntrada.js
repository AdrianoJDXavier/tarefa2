import React from "react";
import UsuarioSaida from "../UsuarioSaida/UsuarioSaida";
import './UsuarioEntrada.css'

class UsuarioEntrada extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
          value2: "Adriano Xavier",
          nome: ""
        };
    
      }
    
      
    
      carregaNome = (event) => {
        this.setState({ nome: event.target.value });
      }
    
      carregaNomeClick = (event) => {
        this.setState({ value2: this.state.nome});
      }
    
    render(props){
        const { nome } = this.state;
        return(
            <div>
                <div>
                <form>
                    <input type='text' value={nome} onChange={this.carregaNome}/>
                    <button type="button" onClick={this.carregaNomeClick}>Enviar</button>
                    </form>
                </div>
                <UsuarioSaida name={this.state.value2} texto="Aqui é necessário clicar em enviar para o texto mudar!"/>
                <UsuarioSaida name={this.state.nome} texto="Aqui o texto digitado é carregado pelo onChange!"/>
            </div>
        );
    }

}
export default UsuarioEntrada;