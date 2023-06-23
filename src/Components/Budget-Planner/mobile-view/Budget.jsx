import React from "react";
import PlanningTabMobile from "./PlanningTabMobile";

const Budget = ({ loading, category, setTrackChanges }) => {
  return (
    <PlanningTabMobile category={category} setTrackChanges={setTrackChanges} loading={loading}/>
  );
};

export default Budget;
