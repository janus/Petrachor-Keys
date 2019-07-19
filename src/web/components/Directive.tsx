import * as React from "react";
import {Card} from "react-bootstrap";
import * as ReactDom from "react-dom";

export const Directive = () => {
    return (
        <Card>
            <Card.Header>
                Petrachor browser-based key generator
            </Card.Header>
            <Card.Body style={{backgroundColor: "green"}}>
            <p >
            You dont need to have Petrachor SDK to start participating in Petrachor blockchain. You can now
            generate keys from your broswer. All it needs from you is just 5 seconds.
             You can generate Bl12-138 keys on the fly. This is browser based and there is not back-end
            activies at all. All the crypto functions are right there in your browser. This is a quick and
            fun way to get keys without installing any app.</p>

            </Card.Body>
        </Card>
    );

};
