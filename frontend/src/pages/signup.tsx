import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody } from "@heroui/card";
//import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

// 🔥 User Interface
interface User {
  id?: string;
  username: string;
  email: string;
  phone: string;
  age: string;
  password: string;
  profileImage?: string;
}

const Signup: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  //const [imageUrl, setImageUrl] = useState<string>("");

  const navigate = useNavigate();

  // 🔥 Upload Image to Cloudinary
  const uploadImageToCloudinary = async (): Promise<string> => {
    if (!image) return "";

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Authentication");

    const res = await axios.post<{ secure_url: string }>(
      "https://api.cloudinary.com/v1_1/ddjehdwgu/image/upload",
      formData,
    );

    return res.data.secure_url;
  };

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      // 🔥 Get existing users
      const res = await axios.get<User[]>(
        "https://68e53f8521dd31f22cc11fee.mockapi.io/user",
      );

      const userExists = res.data.find((user) => user.username === username);

      const userEmail = res.data.find((user) => user.email === email);

      if (userExists) {
        alert("User already exists!");
        return;
      }

      if (userEmail) {
        alert("User Email already exists!");
        return;
      }

      // 🔥 Upload image
      const uploadedImageUrl = await uploadImageToCloudinary();

      // 🔥 Create new user
      await axios.post<User>(
        "https://68e53f8521dd31f22cc11fee.mockapi.io/user",
        {
          username,
          email,
          phone,
          age,
          password,
          profileImage: uploadedImageUrl,
        },
      );

      alert("Signup Successful!");
      navigate("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert("Error: " + err.message);
      } else {
        alert("Unexpected Error");
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="min-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Signup</h1>
        <p className="text-small text-default-400">
          Student Create page to create your fields
        </p>

        <Divider className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-small">
          {location.pathname === "/create" ? (
            <>
              <div>Create Account </div>
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

      <section className="min-h-screen flex items-center justify-center px-2 mb-0.5">
        <Card className="w-full max-w-md shadow-xl rounded-2xl p-4">
          {/* Title */}
          <h1 className="text-2xl text-center mb-2">Create Page</h1>

          {/* Header */}
          <CardHeader className="flex justify-center">
            {image && (
              <Image
                alt="profile"
                src={URL.createObjectURL(image)}
                width={60}
                height={60}
                radius="full"
                classNames={{
                  wrapper: "overflow-hidden",
                  img: "object-cover",
                }}
              />
            )}
            {/* <div className="flex flex-row">
              <p className="text-md font-semibold">HeroUI</p>
              <p className="text-small text-default-500">heroui.com</p>
            </div> */}
          </CardHeader>

          <Divider />

          {/* Body */}
          <CardBody className="space-y-4">
            <p className="text-sm text-default-600 text-center">
              Create your account to get started.
            </p>

            <Form className="space-y-2" onSubmit={handleSignup}>
              <Input
                isRequired
                label="Name"
                labelPlacement="outside"
                placeholder="Enter your name"
                type="name"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />

              <Input
                isRequired
                label="Email "
                labelPlacement="outside"
                placeholder="Enter your email @ "
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <Input
                isRequired
                label="Phone"
                labelPlacement="outside"
                placeholder="Enter your Ph no."
                type="department"
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
              />
              <div className="flex flex-row space-x-4">
                <Input
                  isRequired
                  label="Age"
                  labelPlacement="outside"
                  placeholder="Enter your Age"
                  type="age"
                  value={age}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAge(e.target.value)
                  }
                />

                <Input
                  isRequired
                  label="Password"
                  labelPlacement="outside"
                  placeholder="Enter your Password"
                  type="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />

                <Input
                  isRequired
                  label="Upload Image"
                  labelPlacement="outside"
                  placeholder="➕"
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files && e.target.files[0]) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />
              </div>

              <Button type="submit" color="primary" className="w-full">
                Sign up
              </Button>
            </Form>
          </CardBody>
          {/* Footer */}
          {/* <CardFooter className="justify-center">
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/heroui-inc/heroui"
            >
              Visit source code on GitHub
            </Link>
          </CardFooter> */}
        </Card>
      </section>
    </DefaultLayout>
  );
};

export default Signup;
