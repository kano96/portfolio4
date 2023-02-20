import { Dispatch, SetStateAction, useState } from "react";
import { pages, Sections } from "../enums/SectionsEnum";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "../components/Link";

type Props = {
  selectedPage: Sections;
  setSelectedPage: Dispatch<SetStateAction<Sections>>;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
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
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
