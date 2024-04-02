"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

import { contactSchema } from "../_constants/schema";

export async function sendMessage(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: contactSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  // Send message to your server
  // ...

  // temporarily wait for 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // redirect to thanks page
  redirect("/thanks");
}
