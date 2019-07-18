import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import { IMainPageState } from "../../definitions/setTypes";
import { Directive } from "./Directive";
import { GenerateKeys } from "./GenerateKeys";
import { SaveKeys } from "./SaveKeys";
import { SecurityMessage } from "./SecurityMessage";

export class MainPage extends React.Component<{}, IMainPageState> {

    constructor(p: {}) {
        super(p);
        this.state = {privateKey:  "This is where your private key would appear after generation",
                      publicKey: "This is where your public key would appear after generation",
                    };
        this.updateKeys = this.updateKeys.bind(this);
    }

    public updateKeys(privateKey: string, publicKey: string): void {
        this.setState({privateKey, publicKey});
    }

    public render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <Directive />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <SecurityMessage />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <GenerateKeys updateFn={this.updateKeys} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SaveKeys {...this.state} />
                    </Col>
                </Row>
            </Container>

        );
    }
}
