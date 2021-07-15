import router from "./router/Routes";
import "./css/index.css"
// Window Load
// Window Load
window.addEventListener("load", router(window.location.hash));
window.addEventListener("hashchange", () => {
    router(window.location.hash);
});