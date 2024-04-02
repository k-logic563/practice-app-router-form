import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, {
    message: "名前は必須項目です",
  }),
  email: z.string().email({
    message: "メールアドレスの形式が正しくありません",
  }),
  message: z.string().min(1, {
    message: "問い合わせ内容は必須項目です",
  }),
});
