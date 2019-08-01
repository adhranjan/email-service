var program = require('commander');

program
    .version('0.1.0')
    .option('-n, --name', 'Name of email template')
    .option('-o, --options', 'data to include in email, comma seperated')
    .parse(process.argv);

console.log(program.n)
console.log(program.name)





// .version('0.1.0')
    // .arguments('<cmd> [env]')
    // .option('-n, --cmd', 'Add the specified type of cheese [marble]',[])
    // .option('-l, --list', 'A list', '')
    // .action(function (cmd, env) {
    //     cmdValue = cmd;
    //     envValue = env;
    // }).parse(process.argv);

let arguments = program.list;
let folder = program.name;


// 'use strict';
// const fs = require("fs");
// const path = require('path');
// const commander = require('commander');
// const fileMaker = require('./maker');
// let a =commander
//     .version('1.0.0', '-v, --version')
//     // .usage('[OPTIONS]...')
//     .option('-n, --name', 'Name Of the Email Template')
//     // .option('-, --options <items>', 'Paramters used in email',[])
//     .parse(process.argv);
//
//
// var program = require('commander');
//
// program
//     .command('rm <dir>')
//     .option('-r, --recursive', 'Remove recursively')
//     .action(function (dir, cmd) {
//         console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
//     })
//
// //console.log(commander.parse(process.argv));
//
// //
// // let error = function(error){
// //     console.error(error)
// //     process.exit();
// // };
// //
// // let name = process.argv[2];
// // if (name === undefined) {
// //     error('Email Name not provided');
// // }
// // if (fs.existsSync(path.join(__dirname, '../','emails',name))) {
// //     error(`Use different name, ${name} already used`);
// // }else{
// //     let maker = new fileMaker(name);
// //     maker.make();
// // }