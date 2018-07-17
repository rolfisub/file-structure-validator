const Fsv = require('../dist/index').default;

const fsv = new Fsv({
  base: './',
  files: [],
  dirs: []
});

console.log(fsv.validate());