
const express = require('express'); 
const cors = require('cors'); 
const sgMail = require('@sendgrid/mail');  

const app = express(); 
sgMail.setApiKey('____YOUR___API__KEY');

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


app.listen(4000, () => console.log("Running on Port 4000")); 