import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error.jsx";

//Ce code comprend un composant Header, 
//un composant Footer, et une section principale qui comprend plusieurs routes. 
//La section principale est définie par la balise <Routes>, et chaque route est 
//définie par la balise <Route>. Chaque route est associée à un composant unique, 
//comme Home, About, FicheLogement ou Error. Lorsqu'un utilisateur navigue sur 
//l'application, le composant approprié est affiché en fonction de la route actuelle.

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
