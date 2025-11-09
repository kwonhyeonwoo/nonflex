// src/components/common/Layout.tsx
import { Outlet } from "react-router-dom";
import { useSearchStore } from "../../../store/useSearchStore";
import { useSearchQuery } from "../../../hooks/queries/useSearchQuery";
import SearchOverlay from "../../SearchOverlay/SearchOverlay";

const Layout = () => {
  const { keyword, isSearchOpen } = useSearchStore();
  const { data } = useSearchQuery(keyword);

  return (
    <>
      {isSearchOpen && keyword.length > 0 ? (
        <SearchOverlay results={data?.results ?? []} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Layout;
