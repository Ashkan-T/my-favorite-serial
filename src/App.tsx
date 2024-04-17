import React, { createContext, useState } from "react";
import "./App.css";
import logo from "./images/riverdale-season-4-release-date.jpg";
import Header from "./component/header/serial-header";
import CardFormat from "./component/serial-card-format/serial-card-format";
import serialSeason1Image from "./images/seasonPicture/riverdale-pictures-nxnsotd3ztakjf7i.jpg";
import serialSeason2Image from "./images/seasonPicture/Riverdale1-e1547561795750.webp";
import serialSeason3Image from "./images/seasonPicture/riverdale-og.jpg";
import serialSeason4Image from "./images/seasonPicture/213329-ca24a61.jpeg";
import serialSeason5Image from "./images/seasonPicture/Bez-názvu-1-11.png";
import serialSeason6Image from "./images/seasonPicture/fun-facts-riverdale-portada.jpg";
import serialSeason7Image from "./images/seasonPicture/3234195.webp";
import sunBottonImage from "./images/images.png";
import moonBottonImage from "./images/full-moon-shape-lunar-phase-computer-icons-png-moon-icon-download.jpg";
import Footer from "./component/footer/serial-footer";
import serialFooterImage from "./images/pop_s_chock_lit_shoppe___riverdale_by_killianward96_dcjk2h4-fullview.jpg";

export const SerialThemeColorContext = createContext("");

function App() {
  const [bodyThemeColor, setbodyThemeColor] = useState("dark");
  const toggleThemeMode = () => {
    setbodyThemeColor(bodyThemeColor === "light" ? "dark" : "light");
  };

  return (
    <SerialThemeColorContext.Provider value={bodyThemeColor}>
      <div className={"body-" + bodyThemeColor}>
        <Header logo={logo} webName="RiverDale" webID="ashkan_t_83" />
        <div onClick={toggleThemeMode} className="serial-toggle-mode-botton">
          {bodyThemeColor === "light" && (
            <img src={moonBottonImage} className="toggle-mode-botton-image" />
          )}
          {bodyThemeColor === "dark" && (
            <img src={sunBottonImage} className="toggle-mode-botton-image" />
          )}
        </div>
        <CardFormat
          cardFormatImage={serialSeason1Image}
          serialMadeYear="2017"
          numberOfSerialSeason="Season 1"
          serialIMDB="6.8"
          serialGenre=""
        />
        <CardFormat
          cardFormatImage={serialSeason2Image}
          serialMadeYear="2017"
          numberOfSerialSeason="Season 2"
          serialIMDB="6.7"
          serialGenre=""
        />
        <CardFormat
          cardFormatImage={serialSeason3Image}
          serialMadeYear="2018"
          numberOfSerialSeason="Season 3"
          serialIMDB="6.7"
          serialGenre=""
        />
        <CardFormat
          cardFormatImage={serialSeason4Image}
          serialMadeYear="2019"
          numberOfSerialSeason="Season 4"
          serialIMDB="6.7"
          serialGenre=""
        />
        <CardFormat
          cardFormatImage={serialSeason5Image}
          serialMadeYear="2021"
          numberOfSerialSeason="Season 5"
          serialIMDB="6.6"
          serialGenre=""
        />
        <CardFormat
          cardFormatImage={serialSeason6Image}
          serialMadeYear="2021"
          numberOfSerialSeason="Season 6"
          serialIMDB="6.7"
          serialGenre=""
        />
        <CardFormat
          cardFormatImage={serialSeason7Image}
          serialMadeYear="2023"
          numberOfSerialSeason="Season 7"
          serialIMDB="6.8"
          serialGenre=""
        />
        <Footer
          serialFooterImage={serialFooterImage}
          serialFooterDescription="While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.
        After the death of one of the rich and popular Blossom twins on the 4th of July, the small town of Riverdale investigates the murder. The series starts in September, the beginning of a new school year, that brings with it new students, relationships, and reveals the mysteries of the past 4th of July.
        The quiet little town of Riverdale is turned upside down after it is struck with the mysterious death of Jason Blossom, a popular high school student and member of the most powerful family in town. Archie and his friends explore the struggles of everyday life in a small town whilst taking on the haunting case of Jason Blossom. in order to solve this mystery, the rag tag group of friends must first unlock the secrets that lie buried deep beneath surface of their hometown. Riverdale may not be as innocent as it appears.
        In an innocent, small town, the death of a popular rich boy named Jason Blossom rattles the town. Archie Andrews discovers his love for music, and his teacher. Betty Cooper unravels her feelings for Archie, and her family secrets. Veronica Lodge is the new girl, who is a threat to cheerleading captain Cheryl Blossom, Jason's twin sister. Archie, Betty, Veronica, and Jughead band together to find the mysteries behind Jason Blossom's murder.
        After a teenager was murdered within the town of Riverdale, a group of teenagers, the jock Archie, the girl next door Betty, the new girl Veronica and the outcast Jughead try to unravel the evils lurking within this seemingly innocent town."
        />
      </div>
    </SerialThemeColorContext.Provider>
  );
}

export default App;
