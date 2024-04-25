import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import homeStyles from "../styles/home.css?url";
import headerStyles from "../styles/header.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
];

export default function Home() {
  return (
    <>
      <header className="homePage" id="myHeader">
        {/* <LogoComponent className="logo-container" /> */}
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
      {/*<IntroductionComponent className="about-content" />
    <AboutMeComponent className="about-me-container" />
    <ExperienceComponent className="experience-container" />
  <PortfolioSectionComponent className="portfolio-container" />  */}
    </>
  );
}
