import React, { useContext } from "react";
import "./serial-card-format.css";
import { SerialThemeColorContext } from "../../App";

function CardFormat(props: {
  cardFormatImage: any;
  numberOfSerialSeason: string;
  serialMadeYear: string;
  serialIMDB: string;
  serialGenre: string;
}) {
  const serialCardFormatThemeColor = useContext(SerialThemeColorContext);

  return (
    <article className="serial-card-format">
      <img
        className="serial-season-image"
        src={props.cardFormatImage}
        alt={props.numberOfSerialSeason}
      />
      <div className={"serial-description-" + serialCardFormatThemeColor}>
        <span
          className={"serial-description-genre-" + serialCardFormatThemeColor}
        >
          {"Genre : Drama,Crime,Mystery"}
        </span>
        <span
          className={
            "serial-description-number-season-" + serialCardFormatThemeColor
          }
        >
          {props.numberOfSerialSeason}
        </span>
        <span className="serial-description-season-year">
          {"Year : " + props.serialMadeYear}
        </span>
        <span className="serial-description-season-imdb">
          {"IMDB : " + props.serialIMDB}
        </span>
      </div>
    </article>
  );
}
export default CardFormat;
