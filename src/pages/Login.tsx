import React, { useState } from "react";
import Input from "../components/input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  function handleForm(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <main className="lg:grid grid-cols-2 items-center">
      <section className="lg:max-w-7xl mx-auto py-10 w-11/12  lg:w-2/4 ">
        <div className="mb-12">
          <h1 className="text-white text-3xl font-bold">
            <span className="bg-secondary py-1 px-2 rounded-md">The</span>{" "}
            Filmes
          </h1>
        </div>
        <p className="text-secondary font-semibold text-sm">Bem-vindo(a) 🍿</p>
        <h2 className="text-4xl font-bold text-white">
          Entre na sua conta <span className="text-secondary">.</span>
        </h2>
        <p className="text-white mt-4">
          Para uma melhore experiência entre na sua conta agora{" "}
        </p>
        <form className="flex flex-col gap-6 mt-8" onSubmit={handleForm}>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            onChange={(value) => console.log(value)}
          />
     
          <div className="relative w-full">
            <Input
              label="Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              onChange={(value) => console.log(value)}
            />
            <button
              type="button"
              className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <IconEyeOff color="#ccc" />
              ) : (
                <IconEye color="#ccc" />
              )}
            </button>
          </div>

          <Button className="py-4" onClick={() => alert("Clicked!")}>
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
      <section className="lg:bg-fundo bg-cover  lg:h-screen"></section>
    </main>
  );
};

export default Login;
