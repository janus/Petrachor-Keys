import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import { Directive } from "./Directive";
import { GenerateKeys } from "./GenerateKeys";
import { SaveKeys } from "./SaveKeys";
import { SecurityMessage } from "./SecurityMessage";

export class MainPage extends React.Component<{}, {}> {

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
                        <GenerateKeys />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SaveKeys />
                    </Col>
                </Row>

            </Container>

        );
    }
}
