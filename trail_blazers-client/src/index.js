import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ScrollToTop from "./components/ScrollToTop"

ReactDOM.render(
    <HashRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </HashRouter>,
    document.getElementById("root")
);
