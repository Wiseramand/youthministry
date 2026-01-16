import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import { PrismaAdapter } from "@next-auth/prisma-adapter" // Exemplo para o futuro
// import prisma from "@/lib/prisma" // Exemplo para o futuro
// import bcrypt from "bcrypt" // Exemplo para o futuro

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma), // Descomente quando tiver um banco de dados
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "joao@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // ==========================================================================================
        // !! LÓGICA DE AUTENTICAÇÃO DE EXEMPLO (INSEGURA) !!
        // !! SUBSTITUA PELA SUA LÓGICA DE BANCO DE DADOS !!
        // ==========================================================================================

        if (!credentials) {
          return null
        }

        // 1. Encontre o usuário no seu banco de dados
        // Ex: const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        
        // Lógica de Mock (exemplo):
        const mockUser = {
          id: "1",
          name: "Usuário de Teste",
          email: "teste@gmail.com",
          // Em um caso real, a senha estaria "hasheada" no DB
          // O hash para "password123" seria algo como: "$2b$10$..."
          hashedPassword: "password123", // !! NUNCA armazene senhas em texto plano
        }
        
        if (credentials.email !== mockUser.email) {
          console.log("Usuário não encontrado (mock)");
          return null; // Usuário não encontrado
        }

        // 2. Compare a senha fornecida com a senha "hasheada" do banco de dados
        // Ex: const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
        
        // Lógica de Mock (exemplo):
        const passwordsMatch = credentials.password === mockUser.hashedPassword;


        if (passwordsMatch) {
          // 3. Se as senhas baterem, retorne o objeto do usuário (sem a senha)
          console.log("Usuário autenticado com sucesso (mock)");
          return { id: mockUser.id, name: mockUser.name, email: mockUser.email };
        } else {
          // 4. Se não baterem, retorne null
          console.log("Senha incorreta (mock)");
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWTs para sessão, não requer banco de dados para a sessão em si
  },
  callbacks: {
    // Para incluir o ID do usuário no token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // Para incluir o ID do usuário na sessão do cliente
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    // Se você tiver uma página de login customizada, pode especificá-la aqui.
    // Como estamos usando um modal, não é estritamente necessário agora.
    signIn: '/', 
    error: '/', // Em caso de erro, redireciona para a home (onde o modal pode ser aberto)
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
