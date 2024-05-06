"use server";
import { createTransport } from "nodemailer";
import { validate } from "email-validator";

const Transport = createTransport({
  host: "mail.google.com",
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "team@sabercatrobotics.com",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
});

let Verified;
Transport.verify(function (Err) {
  if (Err) {
    console.warn(Err);
    Verified = false;
  } else {
    Verified = true;
  };
});

export async function SendEmail(Body) {
  let Successful;
  if (Body && Body.Email && validate(Body.Email) && Body.Subject && Body.Subject.replace(/\s/g, "").length && Body.Message && Body.Message.replace(/\s/g, "").length) {
    await new Promise(function (Resolve) {
      const Loop = function () {
        Verified !== undefined ? Resolve(Verified) : setTimeout(Loop);
      };
      Loop();
    });
    if (!Verified) {
      return {
        Success: false,
        VerifiedError: true,
      };
    };
    Transport.sendMail({
      from: "team@sabercatrobotics.com",
      to: ["team@sabercatrobotics.com"],
      replyTo: Body.Email,
      subject: `[Contact Form]: "${Body.Subject}"`,
      text: `[Message Content]: "${Body.Message}"`,
    }, function (Err) {
      if (Err) {
        console.warn(Err);
        Successful = false;
      } else {
        Successful = true;
      };
    });
    await new Promise(function (Resolve) {
      const Loop = function () {
        Successful !== undefined ? Resolve(Verified) : setTimeout(Loop);
      };
      Loop();
    });
    if (Successful) {
      return {
        Success: true,
      };
    } else {
      return {
        Success: false,
        SendError: true,
      };
    };
  } else {
    return {
      Success: false,
    };
  };
};