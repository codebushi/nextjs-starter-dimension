
const express = require('express'); 
require('dotenv').config()
const cors = require('cors'); 
const sgMail = require('@sendgrid/mail');  

const app = express(); 
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors()); 

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
        subject: topic,
        text: text,
    }
    const reminder={
        to: sender,
        from: recipient,
        subject: "Thank you for your inquiry",
        text: `Thank you for your inquiry, what are your project requirements?, What is your overall budget for the project? Do you have a specific timeline you need it completed by?`
    }


    try{   
        let status;    
        const emails = [
          // {
          //   to: 'recipient1@example.org',
          //   from: 'sender@example.org',
          //   subject: 'Hello recipient 1',
          //   text: 'Hello plain world!',
          //   html: '<p>Hello HTML world!</p>',
          // },
          // {
          //   to: 'recipient2@example.org',
          //   from: 'other-sender@example.org',
          //   subject: 'Hello recipient 2',
          //   text: 'Hello other plain world!',
          //   html: '<p>Hello other HTML world!</p>',
          // },
          msg,reminder
        ];
        // sgMail.send(emails)
        return response.json({msg:msg, reminder:reminder, status:'success'})
        } catch (error) {
        console.error('first catch err: ',error);
        return response.status(500).json({status:'fail'});
      }
})
console.log('email ', process.env.EMAIL_TO)
console.log('sg key:', process.env.SENDGRID_API_KEY)
app.listen(4000, () => console.log("Running on Port 4000")); 