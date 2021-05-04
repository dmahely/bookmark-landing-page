import React, { Fragment, createContext, Provider } from "react";
import { Nav } from "../components/Nav/Nav.js";
import { Hero } from "../components/Hero/Hero.js";
import { Features } from "../components/Features/Features.js";
import { FAQs } from "../components/FAQs/FAQs.js";
import { Downloads } from "../components/Downloads/Downloads.js";
import { NewsletterForm } from "../components/NewsletterForm/NewsletterForm.js";
import { Footer } from "../components/Footer/Footer.js";

const App = () => {
  return (
    <Fragment>
      <Nav />
      <main>
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
