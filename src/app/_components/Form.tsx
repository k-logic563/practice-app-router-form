"use client";

import { getFormProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import type React from "react";
import { useFormState, useFormStatus } from "react-dom";

import { sendMessage } from "../_actions/postAction";
import { contactSchema } from "../_constants/schema";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return <button {...props} disabled={pending || props.disabled} />;
}

const ContactForm = () => {
  const [lastResult, action] = useFormState(sendMessage, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactSchema });
    },
    shouldValidate: "onBlur",
  });

  return (
    <form action={action} {...getFormProps(form)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name={fields.name.name} />
        <div>{fields.name.errors}</div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name={fields.email.name} />
        <div>{fields.email.errors}</div>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name={fields.message.name} />
        <div>{fields.message.errors}</div>
      </div>
      <Button>Send</Button>
    </form>
  );
};

export default ContactForm;
