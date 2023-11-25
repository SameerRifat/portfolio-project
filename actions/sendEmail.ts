"use server";

import { getErrorMessage, validateString } from "@/lib/Utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";
import { renderAsync } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message")

    if(!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender Email"
        }
    }
    if(!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    let data;

    const html = await renderAsync(
        React.createElement(ContactFormEmail, {
            message: message as string,
            senderEmail: senderEmail as string
        })
    )

    try {
         data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "sameerrifat96@gmail.com",
            subject: "message from contact form",
            reply_to: senderEmail as string,
            // text: message as string
            // react: React.createElement(ContactFormEmail, {
            //     message: message as string,
            //     senderEmail: senderEmail as string
            // })
            html: html,
            // react: <ContactFormEmail message={message} senderEmail={senderEmail}/>
        })
    } catch (error: unknown) {
        console.log('server error: ', error)
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }
} 