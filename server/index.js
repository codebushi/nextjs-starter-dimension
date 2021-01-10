
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

app.get('/send-email', (req,res) => {
    
    //Vars from query string in the search bar
    const { recipient, sender, topic, text } = req.query; 
    const msg = {
        to: recipient, 
        from: sender,
        subject: topic,
        text: text,
    }
    sgMail.send(msg)
    .then((msg) => console.log(text));
});
console.log('email ', process.env.EMAIL_TO)
console.log('sg key:', process.env.SENDGRID_API_KEY)
app.listen(4000, () => console.log("Running on Port 4000")); 