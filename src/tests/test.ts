import fsval from "../index";
import { expect } from 'chai';

describe('file structure validator', ()=> {
  const fsv1 = new fsval({
    base: "./src/tests/dirtestaaa",
    files:[],
    dirs: []
  });

  it('base doesnt exists', ()=> {
    expect(fsv1.validate()).to.have.property('valid').to.equal(false);
  });

  const fsv2 = new fsval({
    base: "./src/tests/dirtest",
    files:[],
    dirs: []
  });

  it('base works', ()=> {
    expect(fsv2.validate()).to.have.property('valid').to.equal(true);
  });

  const fsv3 = new fsval({
    base: "./src/tests/dirtest",
    files:['testaaa.txt'],
    dirs: []
  });

  it('file doesnt exist', ()=> {
    expect(fsv3.validate()).to.have.property('valid').to.equal(false);
  });

  const fsv4 = new fsval({
    base: "./src/tests/dirtest",
    files:['test.txt'],
    dirs: []
  });

  it('file exist', ()=> {
    expect(fsv4.validate()).to.have.property('valid').to.equal(true);
  });

  const fsv5 = new fsval({
    base: "./src/tests/dirtest",
    files:['test.txt', 'testaaaa.txt'],
    dirs: []
  });

  it('one file does not exist', ()=> {
    expect(fsv5.validate()).to.have.property('valid').to.equal(false);
  });

  const fsv6 = new fsval({
    base: "./src/tests/dirtest",
    files:['test.txt', 'test2.txt'],
    dirs: []
  });

  it('multiple files exists', ()=> {
    expect(fsv6.validate()).to.have.property('valid').to.equal(true);
  });

});

