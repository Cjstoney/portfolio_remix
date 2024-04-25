const Introduction = ({ className }) => {
  return (
    <div className={className} id="introductionSection">
      <h1 className="introduction">
        Hello. <br />I am <span className="name">Camerone</span>
      </h1>
      <div className="small-text-container">
        <p className="introduction-text">
          Web Developer. Woodworker. Avid Learner.
        </p>
        <p className="introduction-text" id="desktop-only">
          Currently employed at
          <span className="text-accent-color"> Softcrylic</span> as an
          <span className="text-accent-color"> Implementation Engineer</span>.
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
  );
};

export default Introduction;
