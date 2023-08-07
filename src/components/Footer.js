import "../styles/Footer.scss";
import FooterLogo from "./Logo";
import NavBar from "./NavBar";
import {
  MapIcon,
  PhoneIcon,
  MailIcon,
  FaceBook,
  Twitter,
  LinkedIn,
  Pinterest,
} from "../images/svg_icons";

function Footer() {
  return (
    <footer className="Footer">
      <div className="company_details">
        <div className="footer_logo">
          <FooterLogo svgColor={"#fff"} />
        </div>

        <div className="information">
          <h3>Информация</h3>
          <NavBar />
        </div>

        <div className="contacts">
          <h3>Контакты</h3>

          <div className="contacts_container">
            {/* ADDRESS */}
            <div className="contact_item">
              <div className="icon">
                <MapIcon />
              </div>
              <div className="text">
                <p>100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="contact_item">
              <div className="icon">
                <PhoneIcon />
              </div>
              <div className="text">
                <a href="tel:+380000000000">Tel: +38(000) 000 00 00</a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="contact_item">
              <div className="icon">
                <MailIcon />
              </div>
              <div className="text">
                <a href="mailto:mail@gmail.com">mail@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="social">
          <h3>Социальные сети</h3>
          <div className="icons_container">
            <a href="/">
              <FaceBook />
            </a>
            <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <LinkedIn />
            </a>
            <a href="/">
              <Pinterest />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2019 Digital Project. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
