// src/components/Header.js
import Link from "next/link";
import Image from "next/image";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="social-icons">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/Instagram.svg" alt="Instagram" width={32} height={32} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/LinkedIn.svg" alt="LinkedIn" width={32} height={32} />
        </a>
      </div>

      <div className="center-content">
        <div className="logo">
          <span>logo</span>
        </div>
        <nav className="nav-links">
          <Link href="#">biblioteka</Link>
          <span className="dot">•</span>
          <Link href="#">projekty</Link>
          <span className="dot">•</span>
          <Link href="#">my story</Link>
          <span className="dot">•</span>
          <Link href="#">
            sklep
            <Image src="/shop-icon.svg" alt="Cart" width={24} height={24} />
          </Link>
        </nav>
      </div>

      <div className="header-actions">
        <button className="lang-button">PL</button>
      </div>
    </header>
  );
};

export default Header;
