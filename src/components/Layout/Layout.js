import * as React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const Layout = ({ pageTitle, children }) => {
  const { languages, changeLanguage } = useI18next();
  return (
    <div>
      <header>
        <h1>Питання та відповіді</h1>
        <ul>
          {languages.map((lng) => (
            <li key={lng}>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}
              >
                {lng}
              </a>
            </li>
          ))}
        </ul>
      </header>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
