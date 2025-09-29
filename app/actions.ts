"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailSchema = z.object({
  user_name: z.string().min(1, "Name is required."),
  user_email: z.string().email("Invalid email address."),
  message: z.string().min(1, "Message is required."),
});

export async function sendEmail(prevState: any, formData: FormData) {
  const validatedFields = sendEmailSchema.safeParse({
    user_name: formData.get("user_name"),
    user_email: formData.get("user_email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { user_name, user_email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Use an email from your verified domain
      to: "officialshaury@gmail.com",
      reply_to: user_email,
      subject: `New message from ${user_name} via portfolio`,
      text: `Name: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`,
    });
    return { message: "Message sent successfully!" };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { message: "Failed to send message. Please try again." };
  }
}
