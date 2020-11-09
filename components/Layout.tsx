import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import Header from "./Header";
import Intro from "./Intro";
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Intro />
      <Header />
      <ErrorBoundary>
        <main className="container mt-3">
          {children}
        </main>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
