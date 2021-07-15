import "./Nav.css";
import imagech from "../../assets/imgs/fondo charizard.jpg"
const Nav = () => {
    const view = `
            <a href="#home">Inicio</a>
            <img src="${imagech}" alt"charizard">
            <a href="#results">Resultados</a>          
      `;
    return view;
};

export default Nav;