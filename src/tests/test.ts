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

  /**
   * FILE testing
   */

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

  const fsv7 = new fsval({
    base: "./src/tests/dirtest",
    files:['test.txt', 'test2.txt', 'subdir/test3.txt'],
    dirs: []
  });

  it('multiple files with subdir exists', ()=> {
    expect(fsv7.validate()).to.have.property('valid').to.equal(true);
  });

  const fsv8 = new fsval({
    base: "./src/tests/dirtest",
    files:['test.txt', 'subdir/test3.txt', 'test2ss.txt' ],
    dirs: []
  });

  it('multiple files within subdir, one does not exist', ()=> {
    expect(fsv8.validate()).to.have.property('valid').to.equal(false);
  });

  /**
   * DIR testing
   */

  const fsv9 = new fsval({
    base: "./src/tests/dirtest",
    files:[],
    dirs: ['asds']
  });

  it('dir doesnt exist', ()=> {
    expect(fsv9.validate()).to.have.property('valid').to.equal(false);
  });

  const fsv10 = new fsval({
    base: "./src/tests/dirtest",
    files:[],
    dirs: ['subdir']
  });

  it('dir exist', ()=> {
    expect(fsv10.validate()).to.have.property('valid').to.equal(true);
  });

  const fsv11 = new fsval({
    base: "./src/tests/dirtest",
    files:[],
    dirs: ['asdasd', 'subdir']
  });

  it('one dir does not exist', ()=> {
    expect(fsv11.validate()).to.have.property('valid').to.equal(false);
  });

  const fsv12 = new fsval({
    base: "./src/tests/dirtest",
    files:[],
    dirs: ['subdir', 'subdirb']
  });

  it('multiple dirs exists', ()=> {
    expect(fsv12.validate()).to.have.property('valid').to.equal(true);
  });

  const fsv13 = new fsval({
    base: "./src/tests/dirtest",
    files:[],
    dirs: ['subdir', 'subdir/subdir2', 'subdir/subdir3']
  });

  it('multiple dirs with subdirs exists', ()=> {
    expect(fsv13.validate()).to.have.property('valid').to.equal(true);
  });

  const fsv14 = new fsval({
    base: "./src/tests/dirtest",
    files:[],
    dirs: ['subdira', 'subdir/subdir2', 'subdir/subdir3']
  });

  it('multiple files within subdir, one does not exist', ()=> {
    expect(fsv14.validate()).to.have.property('valid').to.equal(false);
  });

});

