import React from "react";
import NavBar from "../components/NavBar/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/footer";

export function Initial() {
    return (
        <>
        <NavBar />
        <Outlet />
        <Footer/>
        </>
    )
}