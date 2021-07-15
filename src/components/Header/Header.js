import "./Header.css";
import logoPK from "../../assets/imgs/logo pokemon.png"


const Header = () => {
    const view = `
        <span class="headerImg"><a href="#home">
        <img src="${logoPK}" alt="Logo">
        </a></span>
        <span class= "headerA"><a href="#error404">Contáctenos</a></span>
    `;
    return view;
};

export default Header;