'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, {
    message: "名前は必須項目です"
  }),
  email: z.string()
    .email({
      message: "メールアドレスの形式が正しくありません"
    }),
  message: z.string().min(1, {
    message: "問い合わせ内容は必須項目です"
  }),
})

export async function sendMessage (prev: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Send message to your server
  // ...

  // temporarily wait for 3 seconds
  await new Promise(resolve => setTimeout(resolve, 3000))

  // redirect to thanks page
  redirect('/thanks')
}
