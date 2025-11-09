import { Route, Routes } from 'react-router-dom';
import LoginContainer from '../pages/Login/container/LoginContainer';
import AccountContainer from '../pages/Account/container/AccountContainer';


const routes = [
    {
        path:"/login",
        element:<LoginContainer/>
    },
    {
        path:"/account",
        element:<AccountContainer/>
    },
];

const AuthRouter = () => {
  return (
    <Routes>
      <Route>
        {routes.map(({path,element})=>(
          <Route path={path} element={element}/>
        ))}
      </Route>
    </Routes>
  )
}

export default AuthRouter