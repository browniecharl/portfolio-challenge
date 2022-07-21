import React from "react";

function Footer() {
  return (
    <footer className="footerText">
      <div className="github">
        <a
          className="githubIcon"
          href="https://github.com/browniecharl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="linkdin">
        <a
          className="linkdinIcon"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="twitter">
        <a
          className="twitterIcon"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
