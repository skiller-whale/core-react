import { useRef, useState } from "react";
import type { Whale } from "../lib/apiTypes";
import Dropdown, { type DropdownRef } from "./components/Dropdown";
import DropdownWrapper from "./components/DropdownWrapper";
import Link from "./components/Link";
import pages, { type Page, PageContext } from "./pages";
import ReportSighting from "./pages/ReportSighting";
import Tracker from "./pages/Tracker";
import Whalepedia from "./pages/Whalepedia";

type Props = {
  whales: Whale[];
};

const App = ({ whales }: Props) => {
  const cetaceans = [...new Set(whales.map((whale) => whale.species))].toSorted(
    (a, b) => a.localeCompare(b),
  );

  const [page, _setPage] = useState<Page>(pages[0]);
  const [cetacean, setCetacean] = useState<string | null>(null);
  const setPage = (page: Page, cetacean?: string) => {
    _setPage(page);
    if (cetacean) {
      setCetacean(cetacean);
    }
  };

  const dropdownRef = useRef<DropdownRef>(null);

  return (
    <PageContext.Provider value={setPage}>
      <DropdownWrapper
        className="flex flex-col gap-3"
        dropdownRef={dropdownRef}
      >
        <nav className="flex gap-3">
          {pages.slice(0, -1).map((page) => (
            <Link
              key={page}
              className="flex-1 p-3 bg-blue-200 text-black hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              page={page}
            />
          ))}
          <Dropdown ref={dropdownRef} name="Whalepedia">
            {cetaceans.map((cetacean, index) => (
              <Link
                key={index}
                tabIndex={-1}
                className="p-3 bg-blue-200 text-black hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                page="Whalepedia"
                cetacean={cetacean}
              />
            ))}
          </Dropdown>
        </nav>
        {page === "Whale Tracker" ? (
          <Tracker whales={whales} />
        ) : page === "Report a Sighting" ? (
          <ReportSighting cetaceans={cetaceans} />
        ) : page === "Whalepedia" ? (
          <Whalepedia cetaceans={cetaceans} cetacean={cetacean} />
        ) : null}
      </DropdownWrapper>
    </PageContext.Provider>
  );
};

export default App;
