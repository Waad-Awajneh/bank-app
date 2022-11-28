import React from "react";
import { Footer } from "./Footer";
import Header from "./header";
import Main from "./Main";
export const Home = () => {
  return (
    <>
      <Header />{" "}
      <div style={{ height: "60vh" }}>
        <Main />{" "}
      </div>
      <Footer />
    </>
  );
};
