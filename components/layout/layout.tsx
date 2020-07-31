import React from "react";
import { ErrorBoundary } from "../error-boundary";
import Header from "../layout/header";
import Intro from "../layout/intro";
export const Layout = (props) => {
  return (
    <>
      <Intro />
      <Header />
      <ErrorBoundary>
        <main className="container mt-3">
          {props.children}
        </main>
      </ErrorBoundary>
    </>
  );
};
