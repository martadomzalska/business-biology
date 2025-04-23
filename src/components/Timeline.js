"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import "../styles/timelineSection.css";

function Timeline() {
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }
  return (
    <section>
      <SectionTitle onClick={handleToggle}>Timeline</SectionTitle>
      {isOpen && (
        <div className="timeline-section">
          <Image
            src="./spiral.svg"
            alt="spiral"
            width={64}
            height={58}
            className="spiral"
          />
          <Image src="./Arrow.svg" alt="arrow" width={264} height={1763.5} />
          <Image
            src="./timeline-1.svg"
            alt="timeline1"
            width={400}
            height={400}
            className="timelineImg first"
          />
          <Image
            src="./timeline-2.svg"
            alt="timeline2"
            width={400}
            height={400}
            className="timelineImg second"
          />
          <Image
            src="./timeline-3.svg"
            alt="timeline3"
            width={400}
            height={400}
            className="timelineImg third"
          />
          <p className="paragraph one">
            Lorem ipsum dolor sit amet consectetur. Suscipit amet ut congue
            consectetur duis neque turpis nec aenean..
          </p>
          <p className="paragraph two">
            Lorem ipsum dolor sit amet consectetur. Suscipit amet ut congue
            consectetur duis neque turpis nec aenean..
          </p>
          <p className="paragraph three">
            Lorem ipsum dolor sit amet consectetur. Suscipit amet ut congue
            consectetur duis neque turpis nec aenean..
          </p>
          <p className="paragraph four">
            Lorem ipsum dolor sit amet consectetur. Suscipit amet ut congue
            consectetur duis neque turpis nec aenean..
          </p>
          <p className="paragraph five">
            Lorem ipsum dolor sit amet consectetur. Suscipit amet ut congue
            consectetur duis neque turpis nec aenean..
          </p>
          <p className="paragraph six">
            Lorem ipsum dolor sit amet consectetur. Suscipit amet ut congue
            consectetur duis neque turpis nec aenean..
          </p>
        </div>
      )}
    </section>
  );
}

export default Timeline;
