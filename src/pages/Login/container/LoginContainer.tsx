import  { useCallback, useState } from 'react'
import Login from '../Login'
import type { ILogin } from 'auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authServie } from '../../../firebase';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
  const navigate = useNavigate();
  const [login,setLogin] = useState<ILogin>({
    email:"",
    password:"",
  });

  const handleLoginSubmit = useCallback(
    async()=>{
      try{
        const {email,password} = login;
        const data = await signInWithEmailAndPassword(authServie,email,password)
        console.log('로그인이 완료되었습니다,',data);
        return navigate('/')

      }catch(err){
        console.log("err",err)
      }
  },[login])
  return (
    <Login login={login} setState={setLogin} handleLoginSubmit={handleLoginSubmit}/>
  )
}

export default LoginContainer