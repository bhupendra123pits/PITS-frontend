import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const contactTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CONTACT_GMAIL_USER,
    pass: process.env.CONTACT_GMAIL_APP_PASSWORD,
  },
});
