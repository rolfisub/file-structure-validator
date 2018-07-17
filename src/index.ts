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

    private validateList(base: string, list: string[]): ValidationObject {
      const itemResult: ValidationObject = {
        valid: true,
        msg: ''
      };
      list.forEach((item) => {
        const fullItemPath = path.resolve(base, item);
        if(itemResult.valid && !fs.existsSync(fullItemPath)) {
          itemResult.valid = false;
          itemResult.msg = "item does not exists: " + fullItemPath
        }
      });
      return itemResult;
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

        //files
        const fileResult: ValidationObject = this.validateList(dir, this.config.files);
        if(!fileResult.valid) {
            return fileResult;
        }

        //dirs
        const dirsResult: ValidationObject = this.validateList(dir, this.config.dirs);
        if(!dirsResult.valid) {
            return dirsResult;
        }

        //everything checks out!
        return {
            valid: true,
            msg: ''
        };
    }
}
