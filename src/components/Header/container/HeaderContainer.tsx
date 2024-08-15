import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useLocation } from 'react-router-dom';

const HeaderContainer = () => {
    const { pathname } = useLocation();
    const [scroll, setScroll] = useState<number>(0);
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const handleSearchOpen = () => setIsSearch((prev) => !prev)
    const handleScoll = () => setScroll(window.scrollY);
    useEffect(() => {
        window.addEventListener('scroll', handleScoll);
        return () => {
            window.removeEventListener('scroll', handleScoll);
        };
    }, []);
    console.log(scroll)

    return (
        <Header
            scroll={scroll}
            pathname={pathname}
            isSearch={isSearch}
            onSearchOpen={handleSearchOpen}
        />
    )
}

export default HeaderContainer