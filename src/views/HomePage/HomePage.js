import "./HomePage.css";
import pk1 from "../../assets/imgs/pokemon1.png"
import Search from "../../components/Search/Search";
const Homepage = () => {
    const view = `
        <div class="homepage-Container">
        ${Search()}
        </div>
    `;
    return view;
};
export default Homepage;