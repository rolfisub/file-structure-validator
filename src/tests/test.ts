import fsval from "../index";
import { expect } from 'chai';

describe('file structure validator', ()=> {
    const fsv = new fsval({
      files:[''],
      dirs: ['']
    });

    it('should return valid true', ()=> {
      expect(fsv.validate()).to.have.property('valid').to.equal(true);
    })
});

