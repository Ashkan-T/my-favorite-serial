import React from "react";
import "./App.css";
import logo from "./images/riverdale-season-4-release-date.jpg";
import Header from "./component/header/serial-header";
import CardFormat from "./component/serial-card-format/serial-card-format";
import season1Image from "./images/seasonPicture/riverdale-pictures-nxnsotd3ztakjf7i.jpg";
import season2Image from "./images/seasonPicture/Riverdale1-e1547561795750.webp";
import season3Image from "./images/seasonPicture/riverdale-og.jpg";
import season4Image from "./images/seasonPicture/213329-ca24a61.jpeg";
import season5Image from "./images/seasonPicture/Bez-názvu-1-11.png";
import season6Image from "./images/seasonPicture/fun-facts-riverdale-portada.jpg";
import season7Image from "./images/seasonPicture/3234195.webp";

function App() {
  return (
    <div>
      <Header logo={logo} webName="RiverDale" webID="ashkan_t_83" />
      <CardFormat
        cardFormatImage={season1Image}
        serialMadeYear="2017"
        numberOfSerialSeason="Season 1"
        serialIMDB="6.8"
        serialGenre=""
      />
      <CardFormat
        cardFormatImage={season2Image}
        serialMadeYear="2017"
        numberOfSerialSeason="Season 2"
        serialIMDB="6.7"
        serialGenre=""
      />
      <CardFormat
        cardFormatImage={season3Image}
        serialMadeYear="2018"
        numberOfSerialSeason="Season 3"
        serialIMDB="6.7"
        serialGenre=""
      />
      <CardFormat
        cardFormatImage={season4Image}
        serialMadeYear="2019"
        numberOfSerialSeason="Season 4"
        serialIMDB="6.7"
        serialGenre=""
      />
      <CardFormat
        cardFormatImage={season5Image}
        serialMadeYear="2021"
        numberOfSerialSeason="Season 5"
        serialIMDB="6.6"
        serialGenre=""
      />
      <CardFormat
        cardFormatImage={season6Image}
        serialMadeYear="2021"
        numberOfSerialSeason="Season 6"
        serialIMDB="6.7"
        serialGenre=""
      />
      <CardFormat
        cardFormatImage={season7Image}
        serialMadeYear="2023"
        numberOfSerialSeason="Season 7"
        serialIMDB="6.8"
        serialGenre=""
      />
    </div>
  );
}

export default App;
