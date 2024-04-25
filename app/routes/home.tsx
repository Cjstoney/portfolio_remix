import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

//components
import IntroductionComponent from "../components/introduction";
import LogoComponent from "../components/logo";
import SectionHeader from "../components/sectionHeader";
import AboutMeComponent from "../components/aboutMe";

//styles
import homeStyles from "../styles/home.css?url";
import headerStyles from "../styles/header.css?url";
import IntroStyles from "../styles/introduction.css?url";
import SectionHeaderStyle from "../styles/sectionHeader.css?url";
import AboutStyles from "../styles/aboutMe.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "C.S. Portfolio" },
    { name: "description", content: "Camerone Stoney's Portfolio" },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: homeStyles,
  },
  {
    rel: "stylesheet",
    href: headerStyles,
  },
  {
    rel: "stylesheet",
    href: IntroStyles,
  },
  {
    rel: "stylesheet",
    href: SectionHeaderStyle,
  },
  {
    rel: "stylesheet",
    href: AboutStyles,
  },
];

export default function Home() {
  return (
    <div className="homePage">
      <header className="header-container" id="myHeader">
        <LogoComponent className="logo-container" />
        <div className="header-link-container">
          <a href="#introductionSection" className="header-link">
            Introduction
          </a>
          <a href="#aboutMeSection" className="header-link">
            About
          </a>
          <a href="#experienceSection" className="header-link">
            Experience
          </a>
          <a href="#portfolioSection" className="header-link">
            Portfolio
          </a>
        </div>
      </header>
      <Outlet />
      <div className="about-content" id="introductionSection">
        <h1 className="introduction">
          Hello. <br />I am <span className="name">Camerone</span>
        </h1>
        <div className="small-text-container">
          <p className="introduction-text">
            Web Developer. Woodworker. Avid Learner.
          </p>
          <p className="introduction-text" id="desktop-only">
            Currently employed at
            <span className="text-accent-color"> Thesis</span> as a
            <span className="text-accent-color"> Lead Developer</span>.
          </p>
        </div>
        <a
          href="mailto:camjstoney@gmail.com?subject=Found your portfolio!"
          className="emailLink"
          id="directEmail"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Connect
        </a>
      </div>
      <div className="about-me-container" id="aboutMeSection">
        <SectionHeader className={"about-me-header"} headerText={"About Me"} />
        <div className="about-me-content">
          Hi, my name is Camerone Stoney and I like to make things on the web.
          In 2019 I completed a full stack web development boot camp after
          dabbling in tech for a while. Since that time, I have been doing web
          development and analytics implementation full time with little side
          projects along the way.
        </div>
        <picture className="about-me-picture">
          <img
            src="/images/cameroneStoney.png"
            alt="Camerone Stoney"
            className="self-image"
          />
        </picture>
      </div>
      {/*<ExperienceComponent className="experience-container" />
  <PortfolioSectionComponent className="portfolio-container" />  */}
    </div>
  );
}
