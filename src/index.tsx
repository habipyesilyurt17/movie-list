import { render } from "react-dom";
import App from "./App";
import "../node_modules/swiper/swiper-bundle.min.css"
import "../node_modules/swiper/swiper.min.css"

const root = document.querySelector('#root');
render(<App />, root)