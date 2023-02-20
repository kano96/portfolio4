import { useState } from "react";
import { Sections } from "./enums/SectionsEnum";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState(Sections.HOME);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="App bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
