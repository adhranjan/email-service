'use strict'
const root = "emails/";
const fs = require("fs");

module.exports = function (name) {
    this.name = name;
    this.make = function () {
        fs.mkdirSync(`${root}${this.name}`, 744);

        console.log(this.name)
    }
}