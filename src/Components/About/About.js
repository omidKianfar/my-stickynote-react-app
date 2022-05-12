import myImg from "./Img/Untitled-2-min.jpg";

import Styles from "../Sass/About.module.scss";

const About = () => {
  return (
    <main className={Styles.main}>
      <h1>About me</h1>

      <section>
        <img src={myImg} alt="Omid Kianfar" />
        <p>First Name: Omid</p>
        <p>Last Name: Kianfar</p>
        <h3>Contact</h3>
        <p>Gmail: kianfar.omid.990@gmail.com</p>
        <p>
          Github:
          <a href="https://github.com/omidKianfar">
            &nbsp;https://github.com/omidKianfar
          </a>
        </p>
        <p>
          Linkedin:
          <a href="https://www.linkedin.com/in/omid-kianfar-248723232/">
            &nbsp;https://www.linkedin.com/in/omid-kianfar-248723232/
          </a>
        </p>
      </section>
    </main>
  );
};
export default About;
