const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // Use STARTTLS
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 10000
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
          subject: `New Portfolio Contact from ${name}: ${subject || 'No Subject'}`,
          text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `<p>You have received a new message from your portfolio contact form.</p>
                 <p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong></p>
                 <p>${message.replace(/\n/g, '<br>')}</p>`
        };

        // RUN EMAIL IN BACKGROUND (Non-blocking)
        console.log('📧 Starting background email task...');
        transporter.sendMail(mailOptions)
          .then(() => console.log('✅ Email notification sent successfully'))
          .catch(mailErr => console.error('❌ Email notification failed:', mailErr.message));
        
      } catch (err) {
        console.error('❌ Transporter creation failed:', err.message);
      }
    } else {
      console.warn("Nodemailer is not configured (EMAIL_USER or EMAIL_PASS missing). Email was not sent.");
    }

    console.log('✅ Message saved to MongoDB. Sending success response.');
    res.status(201).json({ success: true, message: 'Message sent successfully! 🎉' });
  } catch (err) {
    console.error('Contact route error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// GET /api/contact (optional admin view)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
