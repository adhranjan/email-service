"use strict";
const nodemailer = require("nodemailer");
const q = require('q');


const globalAuth = {
    user: process.env.defaultAuthEmail,
    pass: process.env.defaultAuthPassword,
};

module.exports = function (auth) {
    auth === undefined ? auth = globalAuth : '';
    this.smtpTransport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth
    });
    this.sendEmail = function (emailBody) {
        let deferred = q.defer();
        this.smtpTransport.sendMail(emailBody, function (error, response) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(response);
            }
        });
        return deferred.promise;
    }
};