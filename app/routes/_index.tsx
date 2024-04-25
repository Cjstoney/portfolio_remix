import type { MetaFunction, LinksFunction, json } from "@remix-run/node";

//components
import LogoComponent from "../components/logo";
import SectionHeader from "../components/sectionHeader";
import PortfolioCard from "../components/portfolioCard";

//data
import Jobs from "../data/jobs.json";
import cards from "../data/cards.json";

//styles
import homeStyles from "../styles/home.css?url";
import headerStyles from "../styles/header.css?url";
import IntroStyles from "../styles/introduction.css?url";
import SectionHeaderStyle from "../styles/sectionHeader.css?url";
import AboutStyles from "../styles/aboutMe.css?url";
import ExperienceStyles from "../styles/experience.css?url";
import PortfolioCardStyles from "../styles/portfolioCard.css?url";
import PortfolioSectionStyles from "../styles/portfolioSection.css?url";

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
  {
    rel: "stylesheet",
    href: ExperienceStyles,
  },
  {
    rel: "stylesheet",
    href: PortfolioCardStyles,
  },
  {
    rel: "stylesheet",
    href: PortfolioSectionStyles,
  },
];

export default function Home() {
  const sections = [
    { text: "Introduction", id: "introduction" },
    { text: "About", id: "aboutMe" },
    { text: "Experience", id: "experience" },
    { text: "Portfolio", id: "portfolio" },
  ];

  return (
    <div className="homePage">
      <header className="header-container" id="myHeader">
        <LogoComponent className="logo-container" />
        <div className="header-link-container">
          {sections.map((el, ind) => {
            return (
              <a href={`#${el.id}Section`} className="header-link" key={ind}>
                {el.text}
              </a>
            );
          })}
        </div>
      </header>
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
      <div className="experience-container" id="experienceSection">
        <SectionHeader className="experience-header" headerText="Experience" />
        <ul className="experience-list">
          {Jobs.map((job, index) => {
            return (
              <li key={index} className="individual-job-container">
                <div className="job-title">
                  {job.title}{" "}
                  <span className="job-accent">@ {job.company}</span>
                </div>
                <div className="employment-time">
                  {job.startDate} - {job.endDate}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/*<PortfolioSectionComponent className="portfolio-container" />  */}
      <div className="portfolio-container" id="portfolioSection">
        <SectionHeader className="portfolio-header" headerText="Projects" />
        <div className="cards-container">
          {cards.reverse().map((card, index) => {
            return (
              <PortfolioCard
                className="portfolio-card"
                key={index}
                card={card}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
