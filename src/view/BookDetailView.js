import React from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import "../css/BookDetailView.css"

export default function BookDetailView() {
    return (
        <div>
            <TopMenu/>
            <Outlet/>
        </div>
    )
}