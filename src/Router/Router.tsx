import { BrowserRouter, Route, Routes} from "react-router-dom"
import HeaderContainer from "../components/common/Header/container/HeaderContainer";
import FooterContainer from "../components/common/Footer/container/FooterContainer";
import RootRouter from "./RootRouter";
import AuthRouter from "./AuthRouter";
import Layout from "../components/common/Layout/Layout";



const Router = ()=>{
    return (
      <BrowserRouter>
        <HeaderContainer />
         <Routes>
            <Route element={<Layout/>}>
              <Route path="/*" element={<RootRouter/>}/>
              <Route path="/auth/*" element={<AuthRouter/>}/>
            </Route>
         </Routes>
        <FooterContainer/>
      </BrowserRouter>
    );
};

export default Router;