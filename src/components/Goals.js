"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import "../styles/goalsSection.css";
import Image from "next/image";

const Goals = () => {
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }
  return (
    <section>
      <SectionTitle onClick={handleToggle}>Cele na horyzoncie</SectionTitle>
      {isOpen && (
        <div className="goals-section">
          <div className="goal">
            <Image
              src="./goals.svg"
              alt="goal"
              width={218}
              height={231}
              className="img"
            />
            <p className="paragraphh">
              Lorem ipsum dolor sit amet consectetur...
            </p>
            <button className="button">Zobacz</button>
          </div>
          <div className="goal">
            <Image
              src="./goals.svg"
              alt="goal"
              width={218}
              height={231}
              className="img"
            />
            <p className="paragraphh">
              Lorem ipsum dolor sit amet consectetur...
            </p>
            <button className="button">Zobacz</button>
          </div>
          <div className="goal">
            <Image
              src="./goals.svg"
              alt="goal"
              width={218}
              height={231}
              className="img"
            />
            <p className="paragraphh">
              Lorem ipsum dolor sit amet consectetur...
            </p>
            <button className="button">zobacz</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Goals;
