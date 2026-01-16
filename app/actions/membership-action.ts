"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// O schema de validação para o formulário de membro
const MembershipFormSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório."),
  age: z.coerce.number().min(10, "A idade deve ser de pelo menos 10 anos."),
  country: z.string().min(1, "País é obrigatório."),
  phone: z.string().min(9, "Telefone é obrigatório."),
  city: z.string().min(2, "Cidade é obrigatória."),
  neighborhood: z.string().min(2, "Bairro é obrigatório."),
  province: z.string().optional(), // Opcional, pois só se aplica a Angola
})

// Define o estado que a nossa Server Action vai retornar
export interface MembershipFormState {
  message: string
  errors?: {
    fullName?: string[]
    age?: string[]
    country?: string[]
    phone?: string[]
    city?: string[]
    neighborhood?: string[]
    province?: string[]
  }
  isSuccess: boolean
  submittedData?: z.infer<typeof MembershipFormSchema>
}

export async function createMembershipRequest(
  prevState: MembershipFormState,
  formData: FormData
): Promise<MembershipFormState> {
  // 1. Validar os dados do formulário
  const validatedFields = MembershipFormSchema.safeParse({
    fullName: formData.get("fullName"),
    age: formData.get("age"),
    country: formData.get("country"),
    phone: formData.get("phone"),
    city: formData.get("city"),
    neighborhood: formData.get("neighborhood"),
    province: formData.get("province"),
  })

  if (!validatedFields.success) {
    return {
      message: "Erro na validação. Por favor, verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    }
  }

  const data = validatedFields.data
  const phonePrefix = formData.get("phonePrefix") as string;

  // 2. Enviar o e-mail com Resend
  try {
    await resend.emails.send({
      // IMPORTANTE: Altere para o seu e-mail de destino
      to: "seu-email-aqui@dominio.com",
      // IMPORTANTE: Use um domínio verificado no Resend em produção
      from: "onboarding@resend.dev",
      subject: "Nova Inscrição de Membro!",
      html: `
        <h1>Nova Inscrição de Membro</h1>
        <p><strong>Nome Completo:</strong> ${data.fullName}</p>
        <p><strong>Idade:</strong> ${data.age}</p>
        <p><strong>País:</strong> ${data.country}</p>
        <p><strong>Telefone:</strong> ${phonePrefix} ${data.phone}</p>
        <p><strong>Cidade:</strong> ${data.city}</p>
        ${data.province ? `<p><strong>Província:</strong> ${data.province}</p>` : ""}
        <p><strong>Bairro:</strong> ${data.neighborhood}</p>
      `,
    })

    return {
      message: "Inscrição realizada com sucesso! Bem-vindo(a)!",
      isSuccess: true,
      submittedData: data,
    }
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return {
      message: "Ocorreu um erro ao processar sua inscrição. Tente novamente mais tarde.",
      isSuccess: false,
    }
  }
}
