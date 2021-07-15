import "./HomePage.css";
import Search from "../../components/Search/Search";
const Homepage = () => {
    const view = `
          <div class="container--homepage">
           ${Search()}
          </div>
      `;
    return view;
};
export default Homepage;