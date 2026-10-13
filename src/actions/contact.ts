"use server";

import { Resend } from "resend";

export interface ContactFormState {
  success?: boolean;
  unconfigured?: boolean;
  error?: string;
  message?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    service?: string;
    description?: string;
  };
}

export async function submitContactEnquiry(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Anti-spam honeypot verification
  const honeypot = formData.get("website_trap")?.toString() || "";
  if (honeypot.trim().length > 0) {
    // Silently ignore spam bot submissions
    return {
      success: true,
      message: "Thanks. Your enquiry is in.",
    };
  }

  // 2. Extract fields
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const company = formData.get("company")?.toString().trim() || "";
  const service = formData.get("service")?.toString().trim() || "";
  const description = formData.get("description")?.toString().trim() || "";
  const budget = formData.get("budget")?.toString().trim() || "";
  const timeline = formData.get("timeline")?.toString().trim() || "";

  // 3. Field validation
  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!name || name.length < 2) {
    fieldErrors.name = "Please provide your full name or representative name.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    fieldErrors.email = "Please provide a valid business or professional email address.";
  }

  if (!service) {
    fieldErrors.service = "Please select the service of interest.";
  }

  if (!description || description.length < 10) {
    fieldErrors.description =
      "Please provide at least a brief summary of what you need built (minimum 10 characters).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      fieldErrors,
      error: "Please correct the highlighted fields before submitting.",
    };
  }

  // 4. Resend Integration & Credential Check
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const notificationEmail =
    process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || "bhushansapkal207@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || "enquiries@essyuppay.ai";

  // If RESEND_API_KEY is not configured, NEVER fake a false success
  if (!apiKey || apiKey === "" || apiKey.includes("your_api_key")) {
    return {
      success: false,
      unconfigured: true,
      error:
        "The automated email delivery pipeline is currently awaiting environment key configuration (RESEND_API_KEY). To ensure your message is received immediately, please email bhushansapkal207@gmail.com directly or reach out via WhatsApp.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: email,
      subject: `[ESSYUPPAY.AI] New Project Enquiry: ${name} (${service})`,
      text: `
New Project Enquiry received via ESSYUPPAY.AI:

Name: ${name}
Email: ${email}
Company / Site: ${company || "Not specified"}
Service of Interest: ${service}
Budget Range: ${budget || "Not specified"}
Timeline: ${timeline || "Not specified"}

Project Description:
${description}

Submitted at: ${new Date().toISOString()}
      `,
    });

    if (resendError) {
      return {
        success: false,
        error: `Email delivery error: ${resendError.message}. Please use direct contact via bhushansapkal207@gmail.com.`,
      };
    }

    return {
      success: true,
      message:
        "Thanks. Your enquiry is in. We'll review the details and respond using the contact information you provided.",
    };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected server error occurred.";
    return {
      success: false,
      error: `Transmission failed: ${errorMessage}. Please contact bhushansapkal207@gmail.com directly.`,
    };
  }
}
