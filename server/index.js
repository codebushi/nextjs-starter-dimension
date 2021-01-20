
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
    try{
        sgMail.send(msg)
        return response.send(
            `email sent succesfully sedngrid the msg ${msg}`
          );    
        } catch (error) {
        console.error('err',error);
        return response.status(500).send("error sending mail");
      }
})
console.log('email ', process.env.EMAIL_TO)
console.log('sg key:', process.env.SENDGRID_API_KEY)
app.listen(4000, () => console.log("Running on Port 4000")); 