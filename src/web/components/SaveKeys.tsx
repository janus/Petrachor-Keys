import * as React from "react";
import { Button, Card, Col, Row} from "react-bootstrap";
import * as ReactDom from "react-dom";

export class SaveKeys extends React.Component {

    constructor(p: {}) {
        super(p);
        this.onClick = this.onClick.bind(this);
    }

    public onClick() {
        // Save keys
    }

    public render() {
        return (
            <Card>
                <Card.Header>
                    Generate BL12_138 keys for Petra blockchain
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={6}>
                            <div>
                                Private Key:
                                <textarea value={"private"} contentEditable={false} />
                            </div>

                        </Col>
                        <Col xs={6}>
                            <div>
                                Public Key:
                                <textarea value={"public"} contentEditable={false} />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={this.onClick}>
                        <TiCancel /> Save Keys
                    </Button>
                </Card.Footer>
            </Card>

        );
    }
}
