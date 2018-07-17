import * as path from 'path';
import * as fs from 'fs';

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
    constructor(public config: ConfigObject) {
        this.validate = this.validate.bind(this);
    }

    public validate(): ValidationObject {
        const dir = path.resolve(this.config.base);
        //validate that base path exists
        if (!fs.existsSync(dir)) {
            return {
                valid: false,
                msg: 'base path does not exists: ' + dir
            };
        }

        const fileResult: ValidationObject = {
            valid: true,
            msg: ''
        };
        this.config.files.forEach((file) => {
            const fullFilePath = path.resolve(dir, file);
            if(fileResult.valid && !fs.existsSync(fullFilePath)) {
                fileResult.valid = false;
                fileResult.msg = "file does not exists: " + fullFilePath
            }
        });
        if(!fileResult.valid) {
            return fileResult;
        }

        return {
            valid: true,
            msg: ''
        };
    }
}
