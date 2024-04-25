import { GithubOutline } from "./githubOutline";
import { FolderIcon } from "./folderIcon";

function PortfolioCard({ className, card }) {
  return (
    <div className={className}>
      <FolderIcon className="folder-icon" />
      <a
        className="gh-outline"
        href={card.ghURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutline />
      </a>
      <div className="proj-title">
        {card.projName}
        <div className="proj-description">{card.description}</div>
      </div>
      <div className="proj-tech">
        {card.technologies.map((tech, index) => {
          return (
            <div className="individual-tech" key={`tech-${index}`}>
              {tech.technology}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioCard;
