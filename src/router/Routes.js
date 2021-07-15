//Componentes
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

// Views
import Homepage from "../views/HomePage/HomePage";
import Results from "../views/Results/Results";

const routes = {
    '': Homepage,
    '#home': Homepage,
    '#results': Results
};

const router = async(route) => {

    console.log(route);
    //Components
    const header = document.querySelector('#Header');
    header.innerHTML = await Header();
    const nav = document.querySelector('#Nav');
    nav.innerHTML = await Nav();
    const footer = document.querySelector('#Footer');
    footer.innerHTML = await Footer();

    //Views
    const Main = document.querySelector('#Main');
    let render = routes[route] ? routes[route] : Homepage;
    Main.innerHTML = await render();
}

export default router;