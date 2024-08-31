import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/Home/container/HomeContainer";
import TvContainer from "./pages/Tv/container/TvContainer";
import HeaderContainer from "./components/Header/container/HeaderContainer";
import MovieModalContainer from "./components/common/MovieModal/container/MovieModalContainer";
import SearchContainer from "./pages/Search/container/SearchContainer";
import FooterContainer from "./components/common/Footer/container/FooterContainer";

function App() {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<Routes>
				<Route path="/" element={<HomeContainer />} >
					<Route path="movies/:id" element={<MovieModalContainer />} />
				</Route>
				<Route path='/tv' element={<TvContainer />} />
				<Route path="/search/:keyword" element={<SearchContainer />} >
					<Route path=":id" element={<MovieModalContainer />} />
				</Route>
			</Routes>
			<FooterContainer />
		</BrowserRouter>
	)
}
export default App;
