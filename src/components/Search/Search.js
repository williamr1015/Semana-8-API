import "./Search.css";
import image_search from "../../assets/imgs/Pikachu-Png-Editable.png"

const Search = () => {
    const view = `
        <div class="container-Search">
            <img src="${image_search}" alt="buscador">
            <div class="search">
                <h1 class="title-Search">Busca tu Pokemon</h1>
                <input class="input-Search" id="input-Search" type="text">
                <div class="search--buttons">
                    <a href="#results"><button class="button-Search">Vamos</button></a>
                </div>
            </div>
        </div>
    `;

    document.addEventListener('click', () => {
        const Search_user = document.getElementById("input-Search").value;
        localStorage.setItem('userSearch', Search_user);
    });

    return view;
};
export default Search;