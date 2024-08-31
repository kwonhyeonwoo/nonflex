import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderContainer = () => {
    const navigate = useNavigate();
    const [scroll, setScroll] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const { pathname } = useLocation();
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const handleSearchOpen = () => setIsSearch((prev) => !prev)
    const handleScoll = () => setScroll(window.scrollY);

    const handleMovieSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScoll);
        return () => {
            window.removeEventListener('scroll', handleScoll);
        };
    }, []);

    useEffect(() => {
        if (search) {
            navigate(`/search/${search}`);
        } else {

        }
    }, [search]);
    return (
        <Header
            scroll={scroll}
            pathname={pathname}
            isSearch={isSearch}
            onSearchOpen={handleSearchOpen}
            onMovieSearch={handleMovieSearch}
        />
    )
}

export default HeaderContainer