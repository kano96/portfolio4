import { Dispatch, SetStateAction } from "react";
import { pages, Sections } from "../enums/SectionsEnum";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  selectedPage: Sections;
  setSelectedPage: Dispatch<SetStateAction<Sections>>;
};

const DotGroup = ({ selectedPage, setSelectedPage }: Props) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {pages.map((page) => (
        <AnchorLink
          className={`${
            selectedPage === page.toUpperCase()
              ? selectedStyles
              : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
          href={`#${page}`}
          onClick={() => setSelectedPage(page.toUpperCase() as Sections)}
        />
      ))}
    </div>
  );
};

export default DotGroup;
