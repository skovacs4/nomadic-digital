// @ts-nocheck
import nodemailer from "nodemailer";
import {
    EMAIL_USER,
    EMAIL_PASSWORD,
    EMAIL_SENDER_NAME
} from "$env/static/private";

const transporter = nodemailer.createTransport({
    host: "thenomadicdigital.com",
    port: 465,
    secure: true, // correct for 465
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    }
});

export async function sendEmail({
    to,
    subject,
    text,
    html,
    fromDisplayName,
    replyTo,
    attachments
}) {
    if (!EMAIL_USER || !EMAIL_PASSWORD) {
        throw new Error("SMTP credentials missing");
    }

    const fromName = (fromDisplayName || EMAIL_SENDER_NAME || "Nomadic Digital").trim();

    const info = await transporter.sendMail({
        from: `"${fromName}" <${EMAIL_USER}>`,
        to,
        subject,
        text,
        html,
        replyTo,
        attachments
    });

    return {
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected
    };
}
