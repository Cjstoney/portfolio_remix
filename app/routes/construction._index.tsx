import type { LinksFunction } from "@remix-run/node";

import constructionStyleSheet from "../styles/construction.css?url";
import "@fontsource/roboto-mono";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: constructionStyleSheet },
];

export default function () {
  return (
    <div className="constructionPage">
      <div className="textContainer">
        <h1 className="constructionText" id="constructionTitle">
          portfolio in progress
        </h1>
        <h2 className="developerName" id="nameHeader">
          camerone stoney
        </h2>
        <h3 className="textExplanation">
          developer / implementation engineer / woodworker / avid learner
        </h3>
        <a
          href="mailto:camjstoney@gmail.com?subject=Found your portfolio!"
          className="emailLink"
          id="directEmail"
          target="_blank"
          rel="noopener noreferrer"
        >
          get in touch
        </a>
      </div>
    </div>
  );
}
