import React from "react";
import "./serial-card-format.css";

function CardFormat(props: {
  cardFormatImage: any;
  numberOfSerialSeason: string;
  serialMadeYear: string;
  serialIMDB: string;
  serialGenre: string;
}) {
  return (
    <article className="serial-card-format">
      <img className="serial-season-image" src={props.cardFormatImage} />
      <div className="serial-description">
        <span>{props.serialGenre}</span>
        <span className="serial-number-season">
          {props.numberOfSerialSeason}
        </span>
        <span className="serial-season-year">
          {"Year: " + props.serialMadeYear}
        </span>
        <span className="serial-season-imdb">{"IMDB " + props.serialIMDB}</span>
      </div>
    </article>
  );
}
export default CardFormat;
