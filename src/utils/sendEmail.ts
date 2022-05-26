import createMail from '../api/services/templates/mailTemplate';
import nodemailer from 'nodemailer';

const sendEmail = async (
  email: string,
  subject: string,
  link: string,
  callback: (succes: any) => Promise<void>
): Promise<void> => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      // service: process.env.EMAIL_SERVICE,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail(
      {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        html: createMail('julien', 'julien_abbadie@hotmail.fr', link),
      },
      (err, succes) => {
        if (err) return console.log(err);
        callback(succes);
      }
    );

    console.log('email sent sucessfully');
  } catch (error) {
    console.log(error, 'email not sent');
  }
};

export default sendEmail;
