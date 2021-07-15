import Error from "../../assets/imgs/Error404.jpg"
import "./Error404.css"

const Error404 = () => {
    const view = `
      <div class="Error404">
        <h1>Error 404</h1>
        <h3>Pagina no encontrada</h3>
        <img src="${Error}" alt="Error404">
      </div>
    `;
    return view;
};

export default Error404;