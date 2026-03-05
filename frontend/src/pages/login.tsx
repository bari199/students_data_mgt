import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

interface User {
  id: string;
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      const res = await axios.get<User[]>(
        "https://68e53f8521dd31f22cc11fee.mockapi.io/user",
      );

      const user = res.data.find(
        (u: any) => u.username === username && u.password === password,
      );

      if (user) {
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login Successful");
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert("Axios Error: " + err.message);
      } else {
        alert("Unexpected Error");
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="text-small text-default-400">
          Login to access your account
        </p>

        <Divider className="my-4" />

        <div className="flex h-5 items-center space-x-4 text-small">
          {location.pathname === "/login" ? (
            <>
              <div>Login Page</div>
              <Divider orientation="vertical" />
            </>
          ) : (
            <>
              <div>Docs</div>
              <Divider orientation="vertical" />
              <div>Source</div>
            </>
          )}
        </div>
      </div>

      <section className="min-h-screen flex items-center justify-center px-2">
        <Card className="w-full max-w-md shadow-xl rounded-2xl p-4">
          <h1 className="text-2xl text-center mb-2">Login</h1>

          <CardHeader className="flex justify-center"></CardHeader>

          <Divider />

          <CardBody className="space-y-4">
            <p className="text-sm text-default-600 text-center">
              Enter your credentials to continue.
            </p>

            <Form className="space-y-4" onSubmit={handleLogin}>
              <Input
                isRequired
                label="Username"
                labelPlacement="outside"
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />

              <Input
                isRequired
                label="Password"
                labelPlacement="outside"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />

              <Button type="submit" color="primary" className="w-full">
                Login
              </Button>
            </Form>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
};

export default Login;
