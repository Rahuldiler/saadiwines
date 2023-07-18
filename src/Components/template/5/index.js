import React from "react";
import "react-slideshow-image/dist/styles.css";
import CoupleIntro from "./components/CoupleIntro";
import WeddingDate from "./components/WeddingDate";
import Milestones from "./components/Milestones";
import Itinerary from "./components/Itinerary";
import Hosts from "./components/Hosts";
import POC from "./components/POC";
import RSVP from "./components/RSVP";

function Template5({ templateData, staticTemplateData }) {
  console.log(templateData);
  const { images, weddingInfo, milestone, itinerary, pocs, familyMembers } =
    templateData;
  const { theme } = staticTemplateData;
  return (
    <div className="lg:min-w-[1280px]">
      <div className="lg:flex">
        <WeddingDate images={images} weddingInfo={weddingInfo} />
        <div>
          <CoupleIntro weddingInfo={weddingInfo} />
          <Milestones milestoneList={milestone} />
          <Itinerary itineraryList={itinerary} theme={theme} />
          <Hosts familyMembers={familyMembers} theme={theme} />
          <POC pocs={pocs} theme={theme} />
          <RSVP theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default Template5;
