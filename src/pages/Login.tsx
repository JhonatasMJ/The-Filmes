import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

// Importando o esquema de validação
import { loginSchema, LoginFormData } from "../schemas/Schemas"; 
import { z } from "zod";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({ nome: "", senha: "" });
  const [errors, setErrors] = useState<{ nome?: string; senha?: string }>({});
  const navigate = useNavigate();

  // Função chamada ao submeter o formulário
  function handleForm(event: React.FormEvent) {
    event.preventDefault();

    // Validar com Zod quando o formulário for submetido
    const validation = loginSchema.safeParse(formData);

    if (!validation.success) {
      const errorMessages = validation.error.format();
      setErrors({
        nome: errorMessages.nome?._errors.join(", "),
        senha: errorMessages.senha?._errors.join(", "),
      });
    } else {
      // Se tudo estiver correto, navegue para a próxima página
      navigate("/home"); // Exemplo de redirecionamento após login bem-sucedido
    }
  }

  // Função para alternar a visibilidade da senha
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  // Função chamada ao alterar os valores dos campos de input
  function handleInputChange(name: string, value: string) {
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Limpar os erros do campo correspondente ao digitar
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Limpa o erro do campo ao digitar
    }));
  }

  return (
    <main className="lg:grid grid-cols-2 items-center">
      <section className="lg:max-w-7xl mx-auto py-10 w-11/12 lg:w-2/4">
        <div className="mb-12">
          <h1 className="text-white text-3xl font-bold">
            <span className="bg-secondary py-1 px-2 rounded-md">The</span> Filmes
          </h1>
        </div>
        <p className="text-secondary font-semibold text-sm">Bem-vindo(a) 🍿</p>
        <h2 className="text-4xl font-bold text-white">
          Entre na sua conta <span className="text-secondary">.</span>
        </h2>
        <p className="text-white mt-4">Para uma melhore experiência entre na sua conta agora</p>
        <form className="flex flex-col gap-6 mt-8" onSubmit={handleForm}>
          <div>
            <Input
              label="Nome"
              type="text"
              name="nome" // Passando name corretamente
              value={formData.nome}  // Vinculando o valor do input ao estado
              placeholder="Digite seu nome"
              onChange={handleInputChange}
            />
            {errors.nome && <span className="text-red-500 text-sm">{errors.nome}</span>}
          </div>

          <div className="relative w-full">
            <Input
              label="Senha"
              type={showPassword ? "text" : "password"}
              name="senha" // Passando name corretamente
              value={formData.senha}  // Vinculando o valor do input ao estado
              placeholder="Digite sua senha"
              onChange={handleInputChange}
              className={errors.senha && "border-red-500"}
            />
            <button
              type="button"
              className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <IconEyeOff color="#ccc" /> : <IconEye color="#ccc" />}
            </button>
            {errors.senha && <span className="text-red-500 text-sm mb-12">{errors.senha}</span>}
          </div>

          <Button className="py-4" type="submit">
            <Button.Title>Entrar</Button.Title>
          </Button>
        </form>

        <p className="text-white text-center mt-6">
          Não tem uma conta?{" "}
          <span className="underline text-secondary font-semi-bold ml-2">
            <Link to="/register">Criar Conta</Link>
          </span>
        </p>
      </section>
      <section className="lg:bg-fundo bg-cover lg:h-screen"></section>
    </main>
  );
};

export default Login;
