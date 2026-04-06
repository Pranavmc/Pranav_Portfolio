const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

async function sendWithResend({ name, email, subject, message }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      'User-Agent': 'pranav-portfolio/1.0',
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM,
      to: [process.env.EMAIL_RECEIVER || process.env.EMAIL_FROM],
      subject: `New Portfolio Contact from ${name}: ${subject || 'No Subject'}`,
      reply_to: email,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p>You have received a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API error: ${response.status} ${errorText}`);
  }
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

    if (process.env.RESEND_API_KEY && process.env.EMAIL_FROM) {
      sendWithResend({ name, email, subject, message })
        .then(() => console.log('✅ Resend email notification sent successfully'))
        .catch((mailErr) => console.error('❌ Resend email notification failed:', mailErr.message));
    } else {
      console.warn('Resend is not configured. Message was saved without sending an email notification.');
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
