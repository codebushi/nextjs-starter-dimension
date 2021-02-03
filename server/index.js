
const express = require('express'); 
require('dotenv').config()
const cors = require('cors'); 
const sgMail = require('@sendgrid/mail');  
const app = express(); 
app.use(cors()); 
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const fs = require("fs");

pathToAttachment = `${__dirname}/resume.pdf`;
attachment = fs.readFileSync(pathToAttachment).toString("base64");


app.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server"); 
});

app.get('/send-email', (req,response) => {
        const { sender, topic, text } = req.query; 
    let recipient = process.env.EMAIL_TO
    if(!sender||!topic||!text){
        return response.status(401).send("data misssing");
    }
    const msg = {
        to: recipient, 
        from: sender,
        subject: `${topic} : request for technology services from website`,
        text: text,
    }
    const reminder={
        to: sender,
        from: recipient,
        subject: `${topic}, Thank you for your inquiry`,
        text: `${topic} Thank you for your inquiry, what are your project requirements? What is your overall budget for the project? Do you have a specific timeline you need it completed by? In the meantime please see my resume.`,
        attachments: [
            {
              content: attachment,
              filename: "attachment.pdf",
              type: "application/pdf",
              disposition: "attachment"
            }
          ]
    }


    try{   
        const emails = [
          msg,reminder
        ];
        sgMail.send(emails)
        return response.json({msg:msg, reminder:reminder, status:'success'})
        } catch (error) {
        console.error('first catch err: ',error);
        return response.status(500).json({status:'fail'});
      }
})
console.log('email ', process.env.EMAIL_TO)
console.log('sg key:', process.env.SENDGRID_API_KEY)
app.listen(4000, () => console.log("Running on Port 4000")); 