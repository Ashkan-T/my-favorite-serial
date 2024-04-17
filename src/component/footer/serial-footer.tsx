import { useContext } from "react";
import "./serial-footer.css";
import { SerialThemeColorContext } from "../../App";

function Footer(props: {
  serialFooterImage: any;
  serialFooterDescription: string;
}) {
  const footerThemeColor = useContext(SerialThemeColorContext);

  return (
    <footer className={"serial-footer " + footerThemeColor}>
      <img
        className="serial-footer-image"
        src={props.serialFooterImage}
        alt="Image of footer"
      />
      <p className="serial-footer-description">
        {props.serialFooterDescription}
      </p>
    </footer>
  );
}
export default Footer;
