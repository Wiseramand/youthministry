"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const PartnershipFormSchema = z.object({
  name: z.string().min(3, "Nome completo é obrigatório."),
  email: z.string().email("E-mail inválido."),
  phone: z.string().min(9, "Telefone é obrigatório."),
  partnershipArm: z.string().min(1, "O braço de parceria é obrigatório."),
  amount: z.coerce.number().min(100, "A contribuição mínima é de 100 Kz."),
})

export interface PartnershipFormState {
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    partnershipArm?: string[]
    amount?: string[]
  }
  isSuccess: boolean
  // We can also return the data to display on the success screen
  submittedData?: z.infer<typeof PartnershipFormSchema>
}

export async function createPartnershipRequest(
  prevState: PartnershipFormState,
  formData: FormData
): Promise<PartnershipFormState> {
  const validatedFields = PartnershipFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    partnershipArm: formData.get("partnershipArm"),
    amount: formData.get("amount"),
  })

  if (!validatedFields.success) {
    return {
      message: "Erro na validação. Verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    }
  }

  const data = validatedFields.data

  try {
    await resend.emails.send({
      to: "ceajovenseadolescentes@gmail.com",
      from: "business@codesignglobal.com",
      subject: `Nova Parceria Confirmada: ${data.partnershipArm}`,
      html: `
        <h1>Nova Intenção de Parceria</h1>
        <p>Um parceiro demonstrou intenção de contribuir.</p>
        <p><strong>Nome Completo:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <hr>
        <p><strong>Braço de Parceria:</strong> ${data.partnershipArm}</p>
        <p><strong>Valor da Contribuição:</strong> ${data.amount.toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}</p>
        <hr>
        <p>Por favor, entre em contacto para finalizar os detalhes da contribuição.</p>
      `,
    })

    return {
      message: "Obrigado pela sua parceria!",
      isSuccess: true,
      submittedData: data,
    }
  } catch (error) {
    console.error("Erro ao enviar e-mail de parceria:", error)
    return {
      message: "Ocorreu um erro ao enviar seu pedido. Tente novamente mais tarde.",
      isSuccess: false,
    }
  }
}
