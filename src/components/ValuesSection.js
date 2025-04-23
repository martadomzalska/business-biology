"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import "../styles/valuesSection.css";

const values = [
  {
    icon: "/value-1.svg",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/value-2.svg",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/value-2.svg",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/value-1.svg",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  },
];

function ValuesSection() {
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }
  return (
    <section className="values-section">
      <SectionTitle onClick={handleToggle}>Czym się kieruję?</SectionTitle>
      {isOpen && (
        <div className="values-grid">
          {values.map((item, index) => (
            <div className="value-card" key={index}>
              <Image
                src={item.icon}
                alt={item.title}
                className="value-icon"
                width={192}
                height={192}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ValuesSection;
