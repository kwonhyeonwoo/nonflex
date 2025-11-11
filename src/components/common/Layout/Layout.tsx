// src/components/common/Layout.tsx
import { Outlet } from "react-router-dom";
import { useSearchStore } from "../../../store/useSearchStore";
import { useSearchQuery } from "../../../hooks/queries/useSearchQuery";
import SearchOverlay from "../../SearchOverlay/SearchOverlay";
import { useState } from "react";
const Layout = () => {
  const { keyword, isSearchOpen } = useSearchStore();
  const [id, setId] = useState("");
  const { data } = useSearchQuery(id,keyword);
  console.log('data',data?.results)
  return (
    <div style={{ width: "100%", }}>
      {isSearchOpen && keyword.length > 0 ? (
        <SearchOverlay results={(data?.results ?? [])} setId={setId} />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Layout;
