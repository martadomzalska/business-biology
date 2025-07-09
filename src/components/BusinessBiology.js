"use client";

import { useState } from "react";
import "../styles/businessBiology.css";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const BusinessBiology = () => {
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }
  return (
    <section className="business-biology">
      <SectionTitle onClick={handleToggle}>
        To moment, którym się spotykamy
      </SectionTitle>
      {isOpen && (
        <div className="cards-wrapper">
          <div className="card right">
            <div className="card-div">
              <Image
                className="karolinaPic"
                src="./karolina.svg"
                alt="karolina"
                width={301}
                height={400}
              />

              <p>Pomagam ludziom wzrastać. Chwila po chwili.</p>
            </div>
          </div>
          <div className="card left">
            <p>
              Może właśnie zmieniasz kierunek. Albo budujesz coś od nowa. <br />
              Może prowadzisz zespół. Albo siebie - przez coś, co wymaga
              uważności, odwagi i wsparcia. <br />
              Pracuję z tymi, którzy chcą pracować inaczej - bez przeciążenia,
              bez chaosu, bez utraty siebie. <br /> Mentoring, który opiera się
              na nauce. Szkolenia, które prowadzą do zmiany. <br /> Zwinność,
              która bierze pod uwagę człowieka.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BusinessBiology;
