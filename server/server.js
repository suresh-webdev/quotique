const express = require('express');
// const { MongoClient } = require('mongodb');
const {google} = require('googleapis');
const path = require('path');
const cors = require('cors');
const dotenv =require('dotenv');
const nodemailer = require('nodemailer');
const axios = require('axios');
const schedule = require('node-schedule');



dotenv.config(); 
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT;

const CLIENT_ID=process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const DATABASE=process.env.DATABASE;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URL);
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});



const mongoose = require('mongoose');
mongoose.connect(DATABASE);
const db = mongoose.connection;

db.once('open', () => {
    console.log("Users Database connection established");
});

db.on('error', (err) => {
    console.error("Users Database connection not established:", err);
});




//Fetch Random Quote
async function fetchRandomQuote() {
    try {
        const response = await axios.get("https://api.quotable.io/random?category=all&count=1&minLength=50");
        const data = response.data;
        return {
            content: data.content,
            author: data.author,
        };
    } catch (error) {
        console.error("Error fetching quote:", error.message);
        throw error;
    }
}



async function sendMail(toEmail,Content,Author){

    try{
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'asmiusdummy@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })
        console.log(`Transporter created successfully. Sending email...`);

        const mailOptions = {
            from: 'Quotique 📪 <asmiusdummy@gmail.com>',
            to: toEmail,
            subject : "The Quote of the day",
            text: `The Quote of the day is: \n\n${Content}\n - ${Author}`,
            html: `The Quote of the day is:<br><br><strong>${Content}<br><br> <strong>- ${Author}</strong>`
        }

        const result =await transport.sendMail(mailOptions);
        return result;

    }catch(error){
        return error
    }
}



const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subscribed: {
        type: Boolean, 
        required: true,
        default: true,
    },
});

const User = mongoose.model('User', UsersSchema);


app.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;

        // Check if the email is already subscribed
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({   status:'error', message: 'Email is already subscribed.' });
        }
        // Create a new user
        const newUser = new User({ email });
        await newUser.save();

        res.json({ status: 'success', message: 'Subscription successful.' });
    } catch (error) {
        console.error('Error subscribing:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


const job = schedule.scheduleJob('30  2 * * *', async () => {
    try {
        // Retrieve all users from the database
        const users = await User.find({});
        
        // Fetch a random quote
        const quote = await fetchRandomQuote();
        const content = quote.content;
        const author = quote.author;

        // Extract emails from users
        const emails = users.map(user => user.email);

        // Loop through emails and send emails
        for (const email of emails) {
            // console.log(email);
            const result = await sendMail(email, content, author);
            console.log(`Email sent to ${email}:`, result);
        }
    } catch (error) {
        console.error('Error sending emails:', error);
    }
});

console.log('Scheduled job started:', job.nextInvocation());


// Serve static files from the 'build' directory inside the 'client' directory
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Serve the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
