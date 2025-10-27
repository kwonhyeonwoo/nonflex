import { useCallback,   useState } from 'react';
import Header from '../Header'
import { useLocation,  } from 'react-router-dom'
import { useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';

const HeaderContainer = () => {
  const {pathname} = useLocation();
  console.log('pathname',pathname)
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
    return (
      <Header
        pathName={pathname}
        isSearchOpen={isSearchOpen}
        headerAnimation={headerAnimation}
        onSearchOpen={handleSearchOpen}
      />
    );
}


export default HeaderContainer