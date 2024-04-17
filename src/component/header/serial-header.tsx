import QRCode from "react-qr-code";
import "./serial-header.css";
import { useContext } from "react";
import { SerialThemeColorContext } from "../../App";

function Header(props: { logo: any; webName: string; webID: string }) {
  const serialHeaderThemeColor = useContext(SerialThemeColorContext);

  return (
    <header className={"serial-header-container " + serialHeaderThemeColor}>
      <img
        className="serial-header-image"
        src={props.logo}
        alt={props.webName}
      />
      <h1 className={"serial-header-name-" + serialHeaderThemeColor}>
        {props.webName}
      </h1>
      <div className="serial-header-personal-qr-code">
        <QRCode value={"https://instagram.com/" + props.webID} size={250} />
      </div>
    </header>
  );
}
export default Header;
