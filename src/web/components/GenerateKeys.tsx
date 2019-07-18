import * as React from "react";
import { Button, Card } from "react-bootstrap";
import * as ReactDom from "react-dom";
import { TiCancel} from "react-icons";

export class GenerateKeys extends React.Component {

    constructor(p: {}) {
        super(p);
        this.onClick = this.onClick.bind(this);
    }

    public onClick() {
        // Generate
    }

    public render() {
        return (
            <Card>
                <Card.Header>
                    Generate BL12_138 keys for Petra blockchain
                </Card.Header>
                <Card.Body>
                    This is the key that you would use while transacting on Petra blockchain.
                    It is pretty easy to generate
                </Card.Body>
                <Card.Footer>
                    <Button onClick={this.onClick}>
                        <TiCancel /> Generate
                    </Button>
                </Card.Footer>
            </Card>
        );
    }
}
