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
      <img
        className="serial-season-image"
        src={props.cardFormatImage}
        alt={props.numberOfSerialSeason}
      />
      <div className="serial-description">
        <span className="serial-description-genre">
          {"Genre : Drama,Crime,Mystery"}
        </span>
        <span className="serial-description-number-season">
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
