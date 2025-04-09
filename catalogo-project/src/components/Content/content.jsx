import React from "react";
import NavBar from "../NavBar/navbar";
import { List } from "../List/list";
import Section from "../Section/section";

const Content = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <NavBar />
      <Section />
      {/* Movie Category */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-lime-400">Movie Category</h3>
        <List />
      </div>
    </div>
  );
};

export default Content;