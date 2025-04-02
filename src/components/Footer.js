// src/components/Footer.js
import Image from "next/image";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="footer-column left">
          <div className="footer-social">
            <span>Instagram</span>
            <Image src="Instagram.svg" alt="Instagram" width={48} height={48} />
          </div>
          <div className="footer-social">
            <span>LinkedIn</span>
            <Image src="Linkedin.svg" alt="LinkedIn" width={48} height={48} />
          </div>
        </div>

        {/* Środek */}
        <div className="footer-column center">
          <div className="footer-logo">logo</div>
        </div>

        {/* Prawa kolumna */}
        <div className="footer-column right">
          <p>kontakt</p>
          <p>kontakt</p>
          <p>kontakt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
