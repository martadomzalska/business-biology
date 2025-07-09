"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/projectsSection.css";

const projects = [
  {
    title: "Kompetencje bycia człowiekiem",
    description: "Bycie człowiekiem - instrukcja ",
    image: "/project-1.svg",
  },
  {
    title: "Ekosystem sukcesu",
    description: "Rozwój i dobrostan - szkolenia",
    image: "/project-2.svg",
  },
  {
    title: "Tu i Teraz",
    description: "Przywództwo i dobrostan - rozmowy ",
    image: "/project-3.svg",
  },
];

const ProjectsSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 3, spacing: 135 },
    loop: true,
  });

  return (
    <section className="projects-section">
      <SectionTitle onClick={handleToggle}>
        Projekty, które pielęgnuję{" "}
      </SectionTitle>
      {isOpen && (
        <>
          {/* <div className="carousel-wrapper">
            <button
              className="nav-button left"
              onClick={() => instanceRef.current?.prev()}
            >
              <Image
                src="/left-slider.svg"
                alt="left-slider"
                width={24}
                height={553}
              />
            </button> */}

          <div ref={sliderRef} className="keen-slider">
            {projects.map((project, index) => (
              <div
                className="keen-slider__slide project-slide projects"
                key={index}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="project-image"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="project-link">
                  rozwiń
                </a>
              </div>
            ))}
          </div>

          <button
            className="nav-button right"
            onClick={() => instanceRef.current?.next()}
          >
            <Image
              src="/right-slider.svg"
              alt="right-slider"
              width={24}
              height={553}
            />
          </button>
          {/* </div> */}

          {/* <button className="all-projects-button">wszystkie projekty</button> */}
        </>
      )}
    </section>
  );
};

export default ProjectsSection;
