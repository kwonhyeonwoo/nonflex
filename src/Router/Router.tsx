import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeContainer from "../pages/Home/container/HomeContainer";
import HeaderContainer from "../components/common/Header/container/HeaderContainer";
import FooterContainer from "../components/common/Footer/container/FooterContainer";
import TvContainer from "../pages/Tv/container/TvContainer";
import MovieContainer from "../pages/Movie/container/MovieContainer";
import ModalContainer from "../components/Modal/container/ModalContainer";

const routes=[
  {
    path:"/",
    element:<HomeContainer/>,
  },
  {
    path:"/tv",
    element:<TvContainer/>
  },
  {
    path:"/movie",
    element:<MovieContainer/>
  }
]

const Router = ()=>{
    return (
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          {routes.map(({path,element},idx)=>(
            <Route path={path} element={element} key={idx}>
              <Route path={`movies/:id`} element={<ModalContainer/>}/>
            </Route>
          ))}
        </Routes>
        <FooterContainer/>
      </BrowserRouter>
    );
};

export default Router;