interface ConfigObject {
    files: string[];
    dirs: string[];
}

interface Error {
    valid: boolean;
    msg: string;
}

export default class FSV {
    constructor(public config: ConfigObject) {}

    public validate(): Error {
        return {
            valid: true,
            msg: ''
        };
    }
}
