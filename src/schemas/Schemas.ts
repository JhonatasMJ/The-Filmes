import { z } from "zod";

// Esquema de validação para o login
export const loginSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }), // Nome não pode estar vazio
  senha: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }) // Senha com mínimo de 6 caracteres
    .max(20, { message: "A senha deve ter no máximo 20 caracteres" }),
});

export type LoginFormData = z.infer<typeof loginSchema>; // Tipo gerado pelo Zod
