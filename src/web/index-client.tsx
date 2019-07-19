import * as React from "react";
import * as ReactDom from "react-dom";
import { MainPage } from "./components/MainPage";

//polyfills for IE
import "bootstrap/dist/css/bootstrap.css";
import "./util/polyfills";
import "es6-promise/auto";

const message: string = "this is the client";
console.log(message);

ReactDom.render(
    <MainPage  />,
    document.getElementById("root"));
