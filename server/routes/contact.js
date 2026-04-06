const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

async function sendWithSMTP({ name, email, subject, message }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false') === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${process.env.EMAIL_FROM_NAME || 'Portfolio'}" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_FROM,
    replyTo: email,
    subject: `New Portfolio Contact from ${name}: ${subject || 'No Subject'}`,
    text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p>You have received a new message from your portfolio contact form.</p>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>`,
  });
}

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.EMAIL_FROM
    ) {
      sendWithSMTP({ name, email, subject, message })
        .then(() => console.log('✅ SMTP email notification sent successfully'))
        .catch((mailErr) => console.error('❌ SMTP email notification failed:', mailErr.message));
    } else {
      console.warn('SMTP is not configured. Message was saved without sending an email notification.');
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
