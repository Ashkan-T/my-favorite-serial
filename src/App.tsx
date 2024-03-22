import React from "react";
import "./App.css";
import logo from "./images/336442851_1277974583102386_5163510510687732777_n-1.png";
import Header from "./component/header/serial-header";
import CardFormat from "./component/serial-card-format/serial-card-format";
import season1Image from "./images/seasonPicture/Riverdale-2017.jpg.webp";
import season2Image from "./images/seasonPicture/Riverdale-2017.jpg-1.webp";
import season3Image from "./images/seasonPicture/Riverdale-season-3.jpg.webp";
import season4Image from "./images/seasonPicture/Riverdale.jpg.webp";
import season5Image from "./images/seasonPicture/Riverdale_2017–.jpg.webp";
import season6Image from "./images/seasonPicture/Riverdale-2022-HAMRAHMOVIEES_result.webp";
import Footer from "./component/footer/serial-footer";
import footerImage from "./images/seasonPicture/Riverdale-2017.jpg-1.webp";

function App() {
  return (
    <div>
      <Header logo={logo} webName="RiverDale" webID="ashkan_t_83" />
      <CardFormat
        cardFormatImage={season1Image}
        serialMadeYear="2017"
        numberOfSerialSeason="Season 1"
        serialIMDB="0"
        serialGenre="جنایی ، درام"
      />
      <CardFormat
        cardFormatImage={season2Image}
        serialMadeYear="Season 2"
        numberOfSerialSeason=""
        serialIMDB="0"
        serialGenre="جنایی ، درام"
      />
      <CardFormat
        cardFormatImage={season3Image}
        serialMadeYear="Season 3"
        numberOfSerialSeason=""
        serialIMDB="0"
        serialGenre="جنایی ، درام"
      />
      <CardFormat
        cardFormatImage={season4Image}
        serialMadeYear="Season 4"
        numberOfSerialSeason=""
        serialIMDB="0"
        serialGenre="جنایی ، درام"
      />
      <CardFormat
        cardFormatImage={season5Image}
        serialMadeYear="Season 5"
        numberOfSerialSeason=""
        serialIMDB="0"
        serialGenre="جنایی ، درام"
      />
      <CardFormat
        cardFormatImage={season6Image}
        serialMadeYear="Season 6"
        numberOfSerialSeason=""
        serialIMDB="0"
        serialGenre="جنایی ، درام"
      />

      <Footer
        serialFooterImage={footerImage}
        serialFooterDescription="Thats Work!!!!!!!!!!!"
      />
    </div>
  );
}

export default App;
