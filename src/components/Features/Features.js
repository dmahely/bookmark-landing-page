import React from "react";
import "./Features.css";
import { Feature } from "../Feature/Feature";
import simpleBookmarking from "../../../images/illustration-features-tab-1.svg";
import speedySearching from "../../../images/illustration-features-tab-2.svg";
import easySharing from "../../../images/illustration-features-tab-3.svg";

const Features = () => {
  const handleTabClick = (e) => {
    let hiddenFeatures;
    switch (e.target.id) {
      case "simpleBookmarkingTab":
        hiddenFeatures = document.getElementsByClassName("Feature--container");
        for (let feature of hiddenFeatures) {
          feature.style.display = "none";
        }
        document.getElementById("simpleBookmarking").style.display = "block";
        break;
      case "speedySearchingTab":
        hiddenFeatures = document.getElementsByClassName("Feature--container");
        for (let feature of hiddenFeatures) {
          feature.style.display = "none";
        }
        document.getElementById("speedySearching").style.display = "block";
        break;
      case "easySharingTab":
        hiddenFeatures = document.getElementsByClassName("Feature--container");
        for (let feature of hiddenFeatures) {
          feature.style.display = "none";
        }
        document.getElementById("easySharing").style.display = "block";
        break;
    }
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
      <h3 className="Feature--tab-heading">
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
      />

      <Feature
        id="speedySearching"
        heading="Intelligent search"
        image={speedySearching}
        description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
      />

      <Feature
        id="easySharing"
        heading="Share your bookmarks"
        image={easySharing}
        description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
      />
    </div>
  );
};

export { Features };
