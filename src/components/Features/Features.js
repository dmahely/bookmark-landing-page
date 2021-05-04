import React, { useState } from "react";
import "./Features.css";
import { Feature } from "../Feature/Feature";
import simpleBookmarking from "../../../images/illustration-features-tab-1.svg";
import speedySearching from "../../../images/illustration-features-tab-2.svg";
import easySharing from "../../../images/illustration-features-tab-3.svg";
import cx from "classnames";

const Features = () => {
  const [isOpen, setIsOpen] = useState({
    simpleBookmarkingTab: true,
    speedySearchingTab: false,
    easySharingTab: false,
  });

  const handleTabClick = (e) => {
    const targetTabId = e.target.id;

    const previouslyActiveTab = Object.entries(isOpen)
      .filter((val) => val[1] === true)
      .flat()[0];

    setIsOpen({ ...isOpen, [previouslyActiveTab]: false, [targetTabId]: true });
  };
  return (
    <div className="Features--container">
      <div className="Features--text-container">
        <h2 className="Features--heading">Features</h2>
        <p className="Features--description">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="Features--tabs-container">
        <hr className="Features--hr" />
        <h3
          className={cx("Feature--tab-heading", {
            "Feature--tab-heading-active": isOpen["simpleBookmarkingTab"],
          })}
        >
          <a id="simpleBookmarkingTab" onClick={handleTabClick}>
            Simple Bookmarking
          </a>
        </h3>
        <hr className="Features--hr" />
        <h3
          className={cx("Feature--tab-heading", {
            "Feature--tab-heading-active": isOpen["speedySearchingTab"],
          })}
        >
          <a id="speedySearchingTab" onClick={handleTabClick}>
            Speedy Searching
          </a>
        </h3>
        <hr className="Features--hr" />
        <h3
          className={cx("Feature--tab-heading", {
            "Feature--tab-heading-active": isOpen["easySharingTab"],
          })}
        >
          <a id="easySharingTab" onClick={handleTabClick}>
            Easy Sharing
          </a>
        </h3>
        <hr className="Features--hr" />
      </div>

      <Feature
        id="simpleBookmarking"
        heading="Bookmark in one click"
        image={simpleBookmarking}
        description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        isActive={isOpen["simpleBookmarkingTab"]}
      />

      <Feature
        id="speedySearching"
        heading="Intelligent search"
        image={speedySearching}
        description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        isActive={isOpen["speedySearchingTab"]}
      />

      <Feature
        id="easySharing"
        heading="Share your bookmarks"
        image={easySharing}
        description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        isActive={isOpen["easySharingTab"]}
      />
    </div>
  );
};

export { Features };
