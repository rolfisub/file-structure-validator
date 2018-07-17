import Fsv from "../dist";
import { ConfigObject } from "./index";

const so: ConfigObject = {
  base: './',
  files: [],
  dirs: []
};

const fsv = new Fsv(so);

console.log(fsv.validate());


