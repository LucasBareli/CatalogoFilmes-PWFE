import React from "react";
import Button from "@mui/material/Button";
import { List } from "../List/list";

const Content = () => {
  return (
    <div>
      <main className="">
        <div className="">
          <h2>Spider-Man 3</h2>
          <p className="">Violence | Exciting</p>
          <p className="">Homem aranha home aranha homem aranha...</p>
          <div className="">
            <Button className="">▶ Play</Button>
            <Button className="">More Info</Button>
          </div>
          <List/>
        </div>
      </main>
    </div>
  );
};

export default Content;
