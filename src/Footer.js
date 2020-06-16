import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Coded by Anastasia Samsonova, open-sourced on{" "}
        <a
          href="https://github.com/samsana/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://quirky-pike-a69f97.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify.
        </a>
      </footer>
      <small>
        ICONS:{" "}
        <a
          href="https://www.iconfinder.com/iconsets/weather-filled-outline-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Weather (filled outline)"
        </a>{" "}
        by{" "}
        <a
          href="https://www.iconfinder.com/tes_azhari22"
          target="_blank"
          rel="noopener noreferrer"
        >
          tesyar azhari
        </a>
        , licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/3.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          CC 3.0.
        </a>
      </small>
    </div>
  );
}
