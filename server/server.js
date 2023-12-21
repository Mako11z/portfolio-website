require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const { createTransport } = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(json());

app.post('/api/send', async (req, res) => {
  const { email, subject, message } = req.body;
  
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true, 
  });

  const mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
