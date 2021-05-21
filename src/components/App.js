import React, { Fragment, useState } from "react";
import { Nav } from "../components/Nav/Nav.js";
import { Hero } from "../components/Hero/Hero.js";
import { Features } from "../components/Features/Features.js";
import { FAQs } from "../components/FAQs/FAQs.js";
import { Downloads } from "../components/Downloads/Downloads.js";
import { NewsletterForm } from "../components/NewsletterForm/NewsletterForm.js";
import { Footer } from "../components/Footer/Footer.js";
import { MainContext } from "../contexts/MainContext.js";
import cx from "classnames";

const App = () => {
  const [style, setStyle] = useState("normal");
  const value = { style, setStyle };
  return (
    <Fragment>
      <MainContext.Provider value={value}>
        <Nav />
      </MainContext.Provider>
      <main className={cx({ blurred: style === "blurred" })}>
        <Hero />
        <Features />

        <Downloads />

        <FAQs />
        <NewsletterForm />
        <Footer />
      </main>

      <footer>
        <span className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/dmahely">Doaa Mahely</a>.
        </span>
      </footer>
    </Fragment>
  );
};

export { App };
