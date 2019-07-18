import * as React from "react";
import * as ReactDom from "react-dom";

import "bootstrap/dist/css/bootstrap.css";


//polyfills for IE
import "./util/polyfills";
import 'es6-promise/auto';


const message: string = "this is the client";
console.log(message);

ReactDom.render(
    <Page />,
    document.getElementById("root")
);
