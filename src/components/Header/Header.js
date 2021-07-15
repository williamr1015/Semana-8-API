import "./Header.css";
import logoPK from "../../assets/imgs/logo pokemon.png"


const Header = () => {
    const view = `
        <span class="header-home-img"><img src="${logoPK}" alt="Logo"></span>
        <span><a href="#">Contáctenos</a></span>
    `;
    return view;
};

export default Header;