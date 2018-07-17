# file-structure-validator

This library validates that a base directory exists, and an array of files.directory relative to the base directory also exist.

**Install**
<br/>
<pre>
npm install --save file-structure-validator

OR

yarn add file-structure-validator
</pre>

**usage**
<br/>
<pre>
//ES6 or Typescript
import Fsv from "file-structure-validator";

//OR

//ES5
//var Fsv = require("file-structure-validator");

//Create validation structure:

const folderStructure = {
  base: "./", // can be a full path or relative
  files:[
    //files relative to base path
    //example: "test.txt", "subdir/test.txt"
  ],
  dirs: [
    //sub durectories that must exist
    //example: "subdir", "subdir/subdir2"
  ]
};

//create and instance and pass folder structure
const fsv = new Fsv(folderStructure);

//validate
const result = fsv.validate();
if(result.valid){
    //yey everything is where is supposed to be
} else {
    //oh no something is missing
    console.log(result.msg);
}

</pre>