const mailer = require("nodemailer");
const path = require("path");

const sendMail = async (to, subject, text) => {
    const transporter = mailer.createTransport({
        service: "gmail",
        auth: {
            user: "your_email", // Ensure this is your email
            pass: "your_app_password" // Your 16-character app password
        },
    });

    const mailOptions = {
        from: "sender_email",
        to: to,
        subject: subject,
        html: `<h1>${text}<br></h1>`,
        attachments: [
            {
                filename: 'nyan.gif',
                path: path.join(__dirname, '../assets/nyan.gif'),
            }
        ]
    };

    try {
        const mailRes = await transporter.sendMail(mailOptions);
        console.log('Email sent:', mailRes);
        return mailRes;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

module.exports = {
    sendMail,
};
