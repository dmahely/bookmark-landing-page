import React from "react";
import "./Features.css";
import { Feature } from "../Feature/Feature";
import simpleBookmarking from "../../../images/illustration-features-tab-1.svg";
import speedySearching from "../../../images/illustration-features-tab-2.svg";
import easySharing from "../../../images/illustration-features-tab-3.svg";

const Features = () => {
  const handleTabClick = (e) => {
    const targetTab = e.target;
    const targetTabId = e.target.id;

    // handles changing the css classes for the tab headings
    Array.from(
      document.querySelectorAll(".Feature--tab-heading-active")
    ).forEach((el) => el.classList.remove("Feature--tab-heading-active"));
    targetTab.parentNode.classList.add("Feature--tab-heading-active");

    // handles changing the css classes for the related features
    const relatedFeatureId = targetTabId.substring(0, targetTabId.length - 3);
    const feature = document.querySelector(`#${relatedFeatureId}`);
    Array.from(document.querySelectorAll(".Feature--container-active")).forEach(
      (el) => {
        el.classList.add("Feature--container-inactive");
        el.classList.remove("Feature--container-active");
      }
    );
    feature.classList.add("Feature--container-active");
    feature.classList.remove("Feature--container-inactive");
  };
  return (
    <div className="Features--container">
      <h2 className="Features--heading">Features</h2>
      <p className="Features--description">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <hr />
      <h3 className="Feature--tab-heading Feature--tab-heading-active">
        <a id="simpleBookmarkingTab" onClick={handleTabClick}>
          Simple Bookmarking
        </a>
      </h3>
      <hr />
      <h3 className="Feature--tab-heading">
        <a id="speedySearchingTab" onClick={handleTabClick}>
          Speedy Searching
        </a>
      </h3>
      <hr />
      <h3 className="Feature--tab-heading">
        <a id="easySharingTab" onClick={handleTabClick}>
          Easy Sharing
        </a>
      </h3>
      <hr />

      <Feature
        id="simpleBookmarking"
        heading="Bookmark in one click"
        image={simpleBookmarking}
        description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        state="active"
      />

      <Feature
        id="speedySearching"
        heading="Intelligent search"
        image={speedySearching}
        description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        state="inactive"
      />

      <Feature
        id="easySharing"
        heading="Share your bookmarks"
        image={easySharing}
        description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        state="inactive"
      />
    </div>
  );
};

export { Features };
