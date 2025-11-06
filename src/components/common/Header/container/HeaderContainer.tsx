import { useCallback,   useEffect,   useState } from 'react';
import Header from '../Header'
import { useLocation,  } from 'react-router-dom'
import { useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import { authServie } from '../../../../firebase';

const HeaderContainer = () => {
  const {pathname} = useLocation();
  const [email,setEmail] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const headerAnimation = useAnimation();
  const inputAnimation = useAnimation();
  const handleSearchOpen =useCallback(
    () => {
      setIsSearchOpen((prev)=>!prev) 
    },
    [isSearchOpen,inputAnimation],
  )
  
  
  useMotionValueEvent(scrollY,"change",(y)=>{
    if(y > 80){
      headerAnimation.start({backgroundColor:"black"})
    }else{
      headerAnimation.start({ backgroundColor: "transparent" });
    }
  })
  useEffect(()=>{
    const data =  ()=>{
      const user = authServie.onAuthStateChanged((user)=>{
        if(user){
          setEmail(user.email)
        }
      });
      return user;
    }
    data();
  },[email]);
    return (
      <Header
        email={email}
        pathName={pathname}
        isSearchOpen={isSearchOpen}
        headerAnimation={headerAnimation}
        onSearchOpen={handleSearchOpen}
      />
    );
}


export default HeaderContainer