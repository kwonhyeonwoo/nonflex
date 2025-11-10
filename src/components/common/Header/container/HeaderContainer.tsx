import Header from '../Header'
import { useLocation,  } from 'react-router-dom'
import { useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import { useAuthStore } from '../../../../store/useAuthStore';
import { useSearchStore } from '../../../../store/useSearchStore';

const HeaderContainer = () => {
  const { pathname } = useLocation();
  const { user } = useAuthStore();
  const { isSearchOpen,setKeyword, toggleSearch } = useSearchStore();
  const { scrollY } = useScroll();
  const headerAnimation = useAnimation();

  useMotionValueEvent(scrollY, "change", (y) => {
    headerAnimation.start({
      backgroundColor: y > 80 ? "black" : "transparent",
    });
  });
    return (
      <Header
      email={user?.email ?? null}
      pathName={pathname}
      isSearchOpen={isSearchOpen}
      headerAnimation={headerAnimation}
      handleKeywordChange={(e) => setKeyword(e.target.value)}
      onSearchOpen={toggleSearch}
    />
    );
}


export default HeaderContainer