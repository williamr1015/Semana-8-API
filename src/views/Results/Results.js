import "./Results.css";
import getData from "../../utils/getData";

const Results = async() => {

        let userInput = localStorage.getItem('userSearch');

        const Pokemons = await getData(userInput);
        const view = `
    <div class="container-Results">
        <h1>Resultados de la búsqueda</h1>
        <div class="container-Results-cards">
        ${Pokemons.data.map( Pokemon => `
            <div class="container-Item">
                <div class="title-Item">${Pokemon.name}</div>
                <div class="img-Item"><img src="${Pokemon.images.small}"></div>
                <div class="evolution-Item">Evolucion: ${Pokemon.evolvesTo}</div>
                <div class="tipe-Item">Tipo: ${Pokemon.types}</div>
            </div>
        `).join('')}
        </div>
    </div>`;
    return view;
}
export default Results;