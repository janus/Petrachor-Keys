
export interface IMainPageState {
    privateKey: string;
    publicKey: string;
}

export interface IGenerateKeyProps {
    updateFn: (privateKey: string, publicKey: string) => void;
}

export interface ISaveKeysProps {
    privateKey: string;
    publicKey: string;
}
