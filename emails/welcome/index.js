const q = require('q');
const Email = require('email-templates');

const root = require('../../root')
const from = 'welcome@leaf.com'
const email = new root();

/*
initiate Email with user and password, if you wish to send this email from different email
const welcomeEmail = new Email({
    user: "example@email.com",
    pass: "password"
});
*/
const welcomeEmail = new Email();


/**
 * @param {Object} data  Name of receiver, Email of receiver.
 */
module.exports = function (data) {
    this.data = data;
    this.send = () => {
        let deferred = q.defer();
        welcomeEmail.renderAll('welcome', {
            name: this.data.name,
            email: this.data.to
        }).then((template) => {
            const emailBody = {
                from: from,
                to: this.data.to,
            };
            deferred.resolve(email.sendEmail({...emailBody, ...template}));
        }).catch((e) => {
            deferred.reject(e);
        });
        return deferred.promise;
    }
};