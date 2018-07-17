interface ConfigObject {
    base: string;
    files: string[];
    dirs: string[];
}
interface ValidationObject {
    valid: boolean;
    msg: string;
}
export default class FSV {
    config: ConfigObject;
    constructor(config: ConfigObject);
    private validateList;
    validate(): ValidationObject;
}
export {};
