import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
    <BrowserRouter>
        <ToastContainer />
        <App />
    </BrowserRouter>
    , document.getElementById("root")
);

