import * as React from "react";
import { Button, Card } from "react-bootstrap";
import * as ReactDom from "react-dom";
import { TiCancel} from "react-icons/ti";
import { IGenerateKeyProps } from "../../definitions/setTypes";

export class GenerateKeys extends React.Component<IGenerateKeyProps, {}> {

    constructor(props: IGenerateKeyProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    public generateKeys() {
        // Keys BLS12_381
    }

    public onClick() {
        // Generate
        let priv = ""; // To be created from private key.
        let address = "";
        if (!this.isValidChecksum(address)) {
            while (true) {
                // Generate private key and address
                priv = "updated";
                address = "updated";
                if (this.isValidChecksum(address)) {
                    break;
                }
            }
        }
        address =  "0x" + this.toChecksumAddress(address);
        this.props.updateFn(priv, address);
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

    private isValidChecksum(address: string): boolean {
        const addressLength = address.length;
        const petrachorAddressLength = 40;
        if (addressLength !== petrachorAddressLength) {
            return false;
        }

        const hash = "keccak('keccak256').update(address).digest().toString('hex')"; // Replace with hash
        for (let i = 0; i < address.length; i++) {
            if (address[i] !== (parseInt(hash[i], 16) >= 8 ? address[i].toUpperCase() : address[i])) {
                return false;
            }
        }
        return true;
    }

    private toChecksumAddress(address: string): string {
        const hash = "keccak('keccak256').update(address).digest().toString('hex')"; // Replace with another hash fn
        let ret = "";
        for (let i = 0; i < address.length; i++) {
            ret += parseInt(hash[i], 16) >= 8 ? address[i].toUpperCase() : address[i];
        }
        return ret;
    }
}
