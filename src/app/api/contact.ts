// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service provider
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password'
      }
    });

    try {
      // Send email
      await transporter.sendMail({
        from: 'Your Name <your-email@example.com>',
        to: 'amankohare@gmail.com', 
        subject: 'New Contact Form Submission',
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
      });

      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
