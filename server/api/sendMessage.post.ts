import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  if (body.title && !body.message && !body.author) {
    return {
      error: "Body is not filled properly",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
      },
    });

    await transporter.sendMail({
      from: body.author,
      to: "biznes@odzywieniwiedza.pl",
      subject: body.title,
      text: body.message,
    });

    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
      error,
    };
  }
});
