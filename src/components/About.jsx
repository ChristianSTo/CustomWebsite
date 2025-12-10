import "../blocks/about.css";
import pfp from "../assets/images/pfp.jpg";
import gitHub from "../assets/images/gitHub.png";
import linkedIn from "../assets/images/linkedIn.png";
import instagram from "../assets/images/Instagram_icon.webp";
function About() {
  return (
    <section className="about">
      <div className="about__greetings">
        <img
          className="about__pfp"
          src={pfp}
          alt="Profile picture of Christian To"
        ></img>
        <div className="about__info">
          <h1 className="about__header">Hello! I'm Christian.</h1>
          <div className="about__links">
            <a
              className="about__link"
              href="https://github.com/ChristianSTo"
              target="_blank"
            >
              <img
                className="about__link-image"
                src={gitHub}
                alt="GitHub Logo Link to Christian's GitHub "
              ></img>
            </a>
            <a
              className="about__link"
              href="https://www.linkedin.com/in/christian-to"
              target="_blank"
            >
              <img
                className="about__link-image"
                src={linkedIn}
                alt="LinkedIn Logo Link to Christian's LinkedIn"
              ></img>
            </a>
            <a
              className="about__link"
              href="https://www.instagram.com/don_conburg/"
              target="_blank"
            >
              <img
                className="about__link-image"
                src={instagram}
                alt="Instagram Logo Link to Christian's Instagram"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <p className="about__paragraph">
        With certified knowledge in Software Engineering, I’m passionate about
        developing and designing web experiences that are both functional and
        visually compelling. As a JavaScript and React developer, I specialize
        in front-end development, design, and accessibility, ensuring that every
        interface I build is intuitive, engaging, and inclusive. My expertise
        includes React, CSS, and Figma, and I love the challenge of blending
        clean UI design with seamless interactivity. <br></br>
        <br></br>I thrive in collaborative environments, leveraging Git/GitHub
        for efficient teamwork and version control. These abilities allow my
        teams to win competitions. With additional knowledge with my BBA in
        Marketing and minor in Visual Communication, I bring a user-focused
        approach to web design, crafting experiences that align with audience
        behavior and preferences. <br></br>
        <br></br>Beyond coding, I enjoy creating digital art and playing
        badminton, both of which fuel my creativity and attention to detail.
        Let’s connect and talk about building beautiful, accessible web
        experiences!
      </p>
    </section>
  );
}

export default About;
