import "./HomePage.css";
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