// src/components/Header.js
import Link from "next/link";
import Image from "next/image";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="custom-header">
      {/* <div className="social-icons">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Instagram-1.svg"
            alt="Instagram"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/LinkedIn-1.svg" alt="LinkedIn" width={32} height={32} />
        </a>
      </div> */}

      <div className="center-content">
        <div className="logo">
          <span>logo</span>
        </div>
        <nav className="nav-links">
          <Link href="#">moja historia</Link>
          <span className="dot"></span>
          <Link href="#">biblioteczka</Link>
          <span className="dot"></span>
          <Link href="#">projekty</Link>
          <span className="dot"></span>
          <Link href="#">eventy</Link>
          <span className="dot"></span>
          <Link href="#">
            sklep
            <Image
              src="/shop-icon-1.svg"
              alt="Cart"
              width={24}
              height={24}
              className="shop-cart"
            />
          </Link>
        </nav>
      </div>
      <div className="buttons-container">
        <Image
          src="./pl-button.svg"
          alt="pl-button"
          width={38}
          height={38}
          className="button-left"
        />
        <Image src="./en-button.svg" alt="en-button" width={38} height={38} />
      </div>
      {/* <button className="lang-button">PL</button> */}
    </header>
  );
};

export default Header;
