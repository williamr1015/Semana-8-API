import "./Footer.css"
import pk1 from "../../assets/imgs/pokemon1.png"
import logoPK from "../../assets/imgs/logo pokemon.png"
import redes from "../../assets/imgs/redes.png"


const Footer = () => {
    const view = `
        <span class="footerContainer">
        <img src="${pk1}" alt="Charizard">
        <a href="#home">
        <img src="${logoPK}" alt="Logo">
        </a>
        <span class="container-Redes"><a href="#error404">Nuestras Redes</a>
        <img src="${redes}" alt="redes">
        </span>
        </span>
    `;
    return view;
};

export default Footer;