import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeContainer from "./pages/Home/container/HomeContainer";
import TvContainer from "./pages/Tv/container/TvContainer";
import HeaderContainer from "./components/Header/container/HeaderContainer";

function App() {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<Routes>
				<Route path='/' element={<HomeContainer />} />
				<Route path='/tv' element={<TvContainer />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App;
