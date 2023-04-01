/**
 * Ce code crée une application React et l'affiche à l'aide du DOM.
 *  Il utilise le composant BrowserRouter pour fournir une navigation 
 * entre les différentes pages de l'application et le composant App 
 * comme point d'entrée de l'application. Il utilise également le fichier
 *  de style "main.scss" pour fournir des styles à l'application.
 */

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
