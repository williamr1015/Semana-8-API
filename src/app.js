import router from "./router";
import styles from "./assets/css/index.css"

// Window Load
// Window Load
window.addEventListener("load", router(window.location.hash));
window.addEventListener("hashchange", () => {
    router(window.location.hash);
});