"use server"

import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Define the shape of the form data for validation with Zod
const FormSchema = z.object({
  nomeCompleto: z.string().min(3, "Nome completo é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(9, "Telefone é obrigatório"),
  idade: z.coerce.number().min(10, "A idade deve ser no mínimo 10 anos"),
  escola: z.string().min(1, "Nome da escola é obrigatório"),
  anoEscolar: z.string().min(1, "Ano escolar é obrigatório"),
  provincia: z.string().min(1, "Província é obrigatória"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  quantidadeMembros: z.string().optional(),
  descricao: z.string().optional(),
})

// Define the state that our action will return
export interface TeevoClubFormState {
  message: string
  errors?: {
    nomeCompleto?: string[]
    email?: string[]
    telefone?: string[]
    idade?: string[]
    escola?: string[]
    anoEscolar?: string[]
    provincia?: string[]
    cidade?: string[]
  }
  isSuccess: boolean
}

export async function createTeevoClubRequest(
  prevState: TeevoClubFormState,
  formData: FormData
): Promise<TeevoClubFormState> {
  // 1. Validate form data
  const validatedFields = FormSchema.safeParse({
    nomeCompleto: formData.get("nomeCompleto"),
    email: formData.get("email"),
    telefone: formData.get("telefone"),
    idade: formData.get("idade"),
    escola: formData.get("escola"),
    anoEscolar: formData.get("anoEscolar"),
    provincia: formData.get("provincia"),
    cidade: formData.get("cidade"),
    quantidadeMembros: formData.get("quantidadeMembros"),
    descricao: formData.get("descricao"),
  })

  if (!validatedFields.success) {
    return {
      message: "Ocorreu um erro. Por favor, verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    }
  }

  const {
    nomeCompleto,
    email,
    telefone,
    idade,
    escola,
    anoEscolar,
    provincia,
    cidade,
    quantidadeMembros,
    descricao,
  } = validatedFields.data

  // 2. Send email using Resend
  try {
    await resend.emails.send({
      // IMPORTANTE: Altere o e-mail de destino para o seu e-mail
      to: "ceajovenseadolescentes@gmail.com",
      // IMPORTANTE: Este email deve ser de um domínio verificado no Resend (ex: noreply@seusite.com)
      from: "business@codesignglobal.com",
      subject: "Novo Pedido para Criação de Clube TeeVo!",
      html: `
        <h1>Novo Pedido de Clube TeeVo</h1>
        <p><strong>Nome Completo:</strong> ${nomeCompleto}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Escola/Universidade:</strong> ${escola}</p>
        <p><strong>Ano Escolar:</strong> ${anoEscolar}</p>
        <p><strong>Província:</strong> ${provincia}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Nº de Membros Esperado:</strong> ${quantidadeMembros || "Não especificado"}</p>
        <p><strong>Motivação:</strong> ${descricao || "Não especificado"}</p>
      `,
    })

    return {
      message: "Pedido enviado com sucesso! Entraremos em contacto em breve.",
      isSuccess: true,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      message: "Ocorreu um erro ao enviar o pedido. Por favor, tente novamente mais tarde.",
      isSuccess: false,
    }
  }
}
