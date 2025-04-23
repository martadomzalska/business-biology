"use client";

import SectionTitle from "./SectionTitle";
import "../styles/feedbackSection.css";
// import { useEffect, useRef } from "react";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Imię",
    text: "Lorem ipsum dolor sit amet consectetur. Eu lobortis integer vitae consectetur mi sed aliquet sed... ",
    image: "/person1.png",
  },
  {
    name: "Imię",
    text: "Lorem ipsum dolor sit amet consectetur. Eu lobortis integer vitae consectetur mi sed aliquet sed...",
    image: "/person2.jpg",
  },
  {
    name: "Imię",
    text: "Lorem ipsum dolor sit amet consectetur. Eu lobortis integer vitae consectetur mi sed aliquet sed...",
    image: "/person3.jpg",
  },
  {
    name: "Imię",
    text: "Lorem ipsum dolor sit amet consectetur. Eu lobortis integer vitae consectetur mi sed aliquet sed...",
    image: "/person4.jpg",
  },
  {
    name: "Imię",
    text: "Lorem ipsum dolor sit amet consectetur. Eu lobortis integer vitae consectetur mi sed aliquet sed...",
    image: "/person5.jpg",
  },
  {
    name: "Imię",
    text: "Lorem ipsum dolor sit amet consectetur. Eu lobortis integer vitae consectetur mi sed aliquet sed...",
    image: "/person6.jpg",
  },
];

const topRow = testimonials.slice(0, 3);
const bottomRow = testimonials.slice(3, 6);

// function FeedbackPannel() {
//   return (
//     <section>
//       <SectionTitle>Wieści się roznoszą</SectionTitle>
//       <div className="feedback-carousel-wrapper">
//         <div className="feedback-section">
//           {[...testimonials, ...testimonials].map((item, index) => (
//             <FeedbackCard
//               key={index}
//               name={item.name}
//               text={item.text}
//               image={item.image}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
function FeedbackPannel() {
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }
  return (
    <section className="background">
      <SectionTitle onClick={handleToggle}>Wieści się roznoszą</SectionTitle>
      {isOpen && (
        <div className="feedback-carousel-wrapper">
          {/* <div className="feedback-section">
          {[...testimonials, ...testimonials].map((item, index) => (
            <FeedbackCard
              key={index}
              name={item.name}
              text={item.text}
              image={item.image}
            />
          ))}
        </div> */}
          <div className="feedback-section scroll-slow">
            {[...topRow, ...topRow].map((item, i) => (
              <FeedbackCard key={`top-${i}`} {...item} />
            ))}
          </div>
          <div className="feedback-section scroll-fast reverse">
            {[...bottomRow, ...bottomRow, ...bottomRow].map((item, i) => (
              <FeedbackCard key={`bottom-${i}`} {...item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default FeedbackPannel;

function FeedbackCard({ image, name, text }) {
  return (
    <div className="feedback-card">
      <div className="imageWrapper">
        <Image
          src={image}
          alt={name}
          className="testimonial-img"
          width={256}
          height={256}
        />
      </div>

      <div className="card-info">
        <h2 className="card-info-name">Imie</h2>
        <p className="description">{text}</p>
      </div>
    </div>
  );
}
