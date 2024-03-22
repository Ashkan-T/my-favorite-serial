import React from "react";
import "./serial-footer.css";

function Footer(props: {
  serialFooterImage: any;
  serialFooterDescription: string;
}) {
  return (
    <footer>
      <img src={props.serialFooterImage} alt="" />
      <p>{props.serialFooterDescription}</p>
    </footer>
  );
}
export default Footer;
