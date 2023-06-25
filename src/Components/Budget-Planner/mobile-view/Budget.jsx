import React from "react";
import PlanningTabMobile from "./PlanningTabMobile";

const Budget = ({ loading, categories, transactions, setTrackChanges }) => {
  return (
    <PlanningTabMobile categories={categories} transactions={transactions} setTrackChanges={setTrackChanges} loading={loading}/>
  );
};

export default Budget;
