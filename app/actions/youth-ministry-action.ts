"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Schema de validação para o formulário do Ministério de Jovens
const YouthMinistryFormSchema = z.object({
  name: z.string().min(3, "Nome é obrigatório."),
  email: z.string().email("E-mail inválido."),
  phone: z.string().optional(),
  address: z.string().optional(),
  apartment: z.string().optional(),
  city: z.string().optional(),
  province: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  birthDate: z.string().optional(),
})

export interface YouthMinistryFormState {
  message: string
  errors?: z.ZodError<z.infer<typeof YouthMinistryFormSchema>>["formErrors"]["fieldErrors"]
  isSuccess: boolean
}

export async function createYouthMinistryRequest(
  prevState: YouthMinistryFormState,
  formData: FormData
): Promise<YouthMinistryFormState> {
  // 1. Validar os dados
  const validatedFields = YouthMinistryFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validatedFields.success) {
    return {
      message: "Erro de validação. Verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    }
  }

  const data = validatedFields.data

  // 2. Enviar o e-mail
  try {
    await resend.emails.send({
      to: "ceajovenseadolescentes@gmail.com",
      from: "business@codesignglobal.com",
      subject: "Nova Inscrição - Ministério de Jovens",
      html: `
        <h1>Nova Inscrição - Ministério de Jovens</h1>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone || "Não preenchido"}</p>
        <p><strong>Data de Nascimento:</strong> ${data.birthDate || "Não preenchido"}</p>
        <hr>
        <h2>Endereço</h2>
        <p>${data.address || ""}</p>
        <p>${data.apartment || ""}</p>
        <p>${data.city || ""}, ${data.province || ""} ${data.postalCode || ""}</p>
        <p>${data.country || ""}</p>
      `,
    })

    return {
      message: "Inscrição enviada com sucesso!",
      isSuccess: true,
    }
  } catch (error) {
    console.error("Erro ao enviar e-mail de inscrição (Jovens):", error)
    return {
      message: "Ocorreu um erro ao enviar sua inscrição. Tente novamente.",
      isSuccess: false,
    }
  }
}
