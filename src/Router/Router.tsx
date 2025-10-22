import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeContainer from "../pages/Home/container/HomeContainer";
import HeaderContainer from "../components/common/Header/container/HeaderContainer";

const Router = ()=>{
    return (
        <BrowserRouter>
            <HeaderContainer/>
            <Routes>
                <Route path="/" element={<HomeContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;