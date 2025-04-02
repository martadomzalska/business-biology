"use client";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/projectsSection.css";

const projects = [
  {
    title: "Projekt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu lobortis integer vitae consectetur mi sed aliquet sed... ",
    image: "/project-1.svg",
  },
  {
    title: "Projekt 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu lobortis integer vitae consectetur mi sed aliquet sed... ",
    image: "/project-2.svg",
  },
  {
    title: "Projekt 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu lobortis integer vitae consectetur mi sed aliquet sed... ",
    image: "/project-3.svg",
  },
];

const ProjectsSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 3, spacing: 135 },
    loop: true,
  });

  return (
    <section className="projects-section">
      <SectionTitle>Projekty</SectionTitle>

      <div className="carousel-wrapper">
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
        </button>

        <div ref={sliderRef} className="keen-slider">
          {projects.map((project, index) => (
            <div className="keen-slider__slide project-slide" key={index}>
              <Image
                src={project.image}
                alt={project.title}
                width={256}
                height={256}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#" className="project-link">
                zobacz
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
      </div>

      <button className="all-projects-button">wszystkie projekty</button>
    </section>
  );
};

export default ProjectsSection;
