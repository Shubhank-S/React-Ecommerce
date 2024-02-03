import footer_logo from "../../assets/footer_logo.png";
import instagram_logo from "../../assets/instagram_icon.png";
import pinterest_logo from "../../assets/pintester_icon.png";
import whatsapp_logo from "../../assets/whatsapp_icon.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="No Footer Image" />
        <p>Ecommerce</p>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_socialmedia_icons">
        <div className="footer_socialmedia_icon">
          <img src={instagram_logo} alt="No Instagram Logo" />
        </div>
        <div className="footer_socialmedia_icon">
          <img src={pinterest_logo} alt="No Pinterest Logo" />
        </div>
        <div className="footer_socialmedia_icon">
          <img src={whatsapp_logo} alt="No Whatsapp Logo" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copyright @ 2023- All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
