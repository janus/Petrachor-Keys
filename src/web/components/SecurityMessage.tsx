import * as React from "react";
import * as ReactDom from "react-dom";

export const SecurityMessage = () => {
    return (
        <p>Your keys are generated randomly from this web app, and it is not saved any where on our
            own side. We expect you to properly take care of your keys. Keep particularly the private
            key in a place where to would not be found by others and always available in case you need it
        </p>);
};
