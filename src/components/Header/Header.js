import "./Header.css";
import logoPK from "../../assets/imgs/logo pokemon.png"


const Header = () => {
    const view = `
        <span class="headerImg"><img src="${logoPK}" alt="Logo"></span>
        <span class= "headerA"><a href="#">Contáctenos</a></span>
    `;
    return view;
};

export default Header;