import Image from "next/image";
import styles from "./page.module.css";
import css from "./globals.css";
import BusinessBiology from "@/components/BusinessBiology";
import Projects from "@/components/Projects";
import ValuesSection from "@/components/ValuesSection";
import SocialMedia from "@/components/SocialMedia";
import Timeline from "@/components/Timeline";
import Goals from "@/components/Goals";
import FeedbackPannel from "@/components/FeedbackPannel";

export default function Home() {
  return (
    <div>
      <BusinessBiology />
      <Projects />
      <ValuesSection />
      <SocialMedia />
      <Timeline />
      <Goals />
      <FeedbackPannel />

      <footer className={styles.footer}></footer>
    </div>
  );
}
