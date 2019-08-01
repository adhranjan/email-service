# Email Service
Send email from from node application as a micro service

`Config`

Create .env from .env.example and configure

######Create an email template
This thing doesnt really work, my goal is to make this work

`npm run create $email_name`



`git clone git@github.com:adhranjan/email-service.git
`

`cd email-service`

`npm i`

`cp .env.example .env`

Set `port`, `defaultAuthEmail` and `defaultAuthPassword` in .env file

`node index.js`

Post to 
`localhost:$port/welcome` with 
`to` and `email`
you will receive an email