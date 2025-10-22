import { useState } from 'react';
import Header from '../Header'
import { useLocation,  } from 'react-router-dom'

const HeaderContainer = () => {
    const {pathname} = useLocation();
   const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
   const handleSearchOpen = ()=>setIsSearchOpen((prev)=>!prev)
    return (
      <Header
        pathName={pathname}
        isSearchOpen={isSearchOpen}
        onSearchOpen={handleSearchOpen}
      />
    );
}


export default HeaderContainer