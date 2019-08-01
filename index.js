"use strict";
require('dotenv').config();
const express = require('express')
const app = express()
const jayschema = require('jayschema');
const js = new jayschema();

app.use(express.json());

const welcomeEmail = require('./emails/welcome/');
const welcomeEmailSchema = require('./emails/welcome/schema');

app.post('/welcome', function (req, res) {
    js.validate(req.body, welcomeEmailSchema, function (errs) {
        if (errs) {
            console.log(errs)
            let error = errs[0].desc ? {message: errs[0].desc} : errs[0];
            res.send(400, error)
        } else {
            new welcomeEmail({
                name: req.body.name,
                to: req.body.to,
            }).send().then((d) => {
                res.send(d)
            }).catch((e) => {
                res.send(500, e)
            });
        }
    });
});

app.listen(process.env.port);