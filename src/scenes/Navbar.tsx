import { Dispatch, SetStateAction, useState } from "react";
import { pages, Sections } from "../enums/SectionsEnum";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "../components/Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: Sections;
  setSelectedPage: Dispatch<SetStateAction<Sections>>;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6 ">
        <h4 className="font-playfair text-3xl font-bold">Kevin's Portfolio</h4>
        {/* Desktop nav */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {pages.map((page, i) => (
              <Link
                key={page + i}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="../assets/close-icon.svg" alt="close-icon" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              {pages.map((page, i) => (
                <Link
                  key={"MOBILE" + page + i}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
