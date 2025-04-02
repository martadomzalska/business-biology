import SectionTitle from "./SectionTitle";
import "../styles/socialMediaSection.css";
import Image from "next/image";
function SocialMedia() {
  return (
    <section className="social-media-section">
      <SectionTitle>Social Media ostatnie posty</SectionTitle>
      <div className="posts-wrapper">
        <div className="platform-block">
          <div className="post">
            <Image
              src="/post-1.svg"
              alt="Post Instagram 1"
              width={200}
              height={200}
            />
            <p>Lorem ipsum dolor sit amet consectetur…</p>
            <a href="https://www.instagram.com/post1" target="_blank">
              zobacz
            </a>
          </div>
          <div className="post">
            <Image
              src="/post-2.svg"
              alt="Post Instagram 2"
              width={200}
              height={200}
            />
            <p>Lorem ipsum dolor sit amet consectetur…</p>
            <a href="https://www.instagram.com/post2" target="_blank">
              zobacz
            </a>
          </div>
        </div>

        <div className="icons-separator">
          <Image src="Instagram.svg" alt="Instagram" width={48} height={48} />
          <span></span>
          <Image src="Linkedin.svg" alt="LinkedIn" width={48} height={48} />
        </div>

        <div className="platform-block">
          <div className="post">
            <Image
              src="/post-3.svg"
              alt="Post LinkedIn 1"
              width={200}
              height={200}
            />
            <p>Lorem ipsum dolor sit amet consectetur…</p>
            <a href="https://www.linkedin.com/post1" target="_blank">
              zobacz
            </a>
          </div>
          <div className="post">
            <Image
              src="/post-4.svg"
              alt="Post LinkedIn 2"
              width={200}
              height={200}
            />
            <p>Lorem ipsum dolor sit amet consectetur…</p>
            <a href="https://www.linkedin.com/post2" target="_blank">
              zobacz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
