import React from 'react';
import Productos from './productos.js';
import Footer from './footer.js';
import Header from './header.js';

class Aplicacion extends React.Component{
   state = {
          productos: [
            
          ]
        };
    componentDidMount(){
        this.setState({
          productos: [
            { nombre: "Libro", precio: 200 },
            { nombre: "Disco", precio: 100 },
            { nombre: "Pintura", precio: 400 },
            { nombre: "Videojuego", precio: 600 }
          ]
        });
    }
    render() {
        return (
            <div>
                <Header 
                    titulo="Nuestra tienda virtual"
                />
                <Productos 
                    productos={this.state.productos}
                />
                <Footer />
            </div>
            
        )
    }
}

export default Aplicacion;