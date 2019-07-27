'use strict';
const fs = require("fs");
const path = require('path');

let error = function(error){
    console.error(error)
    process.exit();
}

let name = process.argv[2];
if (name === undefined) {
    error('Email Name not provided');
}
if (fs.existsSync(path.join(__dirname, '../','emails',name))) {
    error(`Use different name, ${name} already used`);
}else{
    // create an email template here
}