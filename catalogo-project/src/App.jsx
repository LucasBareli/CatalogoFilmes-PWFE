import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./routes/routes";
import './index.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
    </>
  )
}

export default App;