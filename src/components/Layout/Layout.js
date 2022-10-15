import * as React from "react";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <header>
        <h1>Питання та відповіді</h1>{" "}
      </header>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
