import { useEffect } from "react";
import Router from "./Router/Router"
import { authServie } from "./firebase";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  const {setUser,setUid} = useAuthStore();
  const fetchUser = ()=>{
     authServie.onAuthStateChanged((user)=>{
      setUser({
        email:user?.email ?? null, 
        displayName:user?.displayName ?? null,
        profile:user?.photoURL ?? null
      });
      setUid(user?.uid ?? null)
    })
  }

  useEffect(()=>{
    fetchUser()
  },[]);
  return (
    <>
      <Router/>
    </>
  )
}

export default App
