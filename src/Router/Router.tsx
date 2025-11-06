import { BrowserRouter, Route, Routes} from "react-router-dom"
import HeaderContainer from "../components/common/Header/container/HeaderContainer";
import FooterContainer from "../components/common/Footer/container/FooterContainer";
import RootRouter from "./RootRouter";
import AuthRouter from "./AuthRouter";



const Router = ()=>{
    return (
      <BrowserRouter>
        <HeaderContainer />
         <Routes>
          <Route path="/" element={<RootRouter/>}/>
          <Route path="/auth/*" element={<AuthRouter/>}/>
         </Routes>
        <FooterContainer/>
      </BrowserRouter>
    );
};

export default Router;