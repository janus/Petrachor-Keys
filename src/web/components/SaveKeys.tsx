import * as React from "react";
import { Button, Card, Col, Form, Row} from "react-bootstrap";
import * as ReactDom from "react-dom";
import { ISaveKeysProps } from "../../definitions/setTypes";

export class SaveKeys extends React.Component<ISaveKeysProps, {}> {

    constructor(props: ISaveKeysProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    public onClick() {
        // Save keys
        const textToWrite = JSON.stringify(this.props);
        const filename = `petrachor_keys_${Date.now()}.json`;

        this.saveTextAsFile(textToWrite  , filename);
    }

    public render() {
        return (
            <Card>
                <Card.Header>
                    Generate BL12_381 keys for Petra blockchain
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} >
                            <Form.Label>Private Key:</Form.Label>
                            <Form.Control
                                type="textarea"
                                style={{height: 100}}
                                readOnly={true}
                                defaultValue={this.props.privateKey}
                            />
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Public Key:</Form.Label>
                            <Form.Control
                                type="textarea"
                                style={{height: 100}}
                                readOnly={true}
                                defaultValue={this.props.publicKey}
                            />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={this.onClick}>
                        Save Keys
                    </Button>
                </Card.Footer>
            </Card>

        );
    }

    private saveTextAsFile(textToWrite: any, fileName: string) {
        const textFileAsBlob = new Blob([textToWrite], {type: "text/json"});
        const downloadLink = document.createElement("a");

        downloadLink.download = fileName;
        downloadLink.innerHTML = "Download File";
        if ((window as any).webkitURL != null) {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = (window as any).webkitURL.createObjectURL(textFileAsBlob);
        } else {
            // Firefox requires the link to be added to the DOM
            // before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            //    	downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    }
}
