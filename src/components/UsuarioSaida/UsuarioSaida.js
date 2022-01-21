import React from "react";
import './UsuarioSaida.css';

class UsuarioSaida extends React.Component{
    
    render(props){
        
        return(
            <div className="card">
                <p className="login">Login: {this.props.name}</p>
                <p className="texto">{this.props.texto}</p>
            </div>
        );
    }

}
export default UsuarioSaida;