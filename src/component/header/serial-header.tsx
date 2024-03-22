import QRCode from "react-qr-code";
import "./serial-header.css";

function Header(props: { logo: any; webName: string; webID: string }) {
  return (
    <header>
      <img src={props.logo} alt={props.webName} />
      <h1>{props.webName}</h1>
      <div>
        <QRCode value={"https://instagram.com/" + props.webID} size={150} />
      </div>
    </header>
  );
}
export default Header;
