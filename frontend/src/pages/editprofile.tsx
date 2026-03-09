import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { useNavigate } from "react-router-dom";

export default function DocsPage() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");


  const navigate = useNavigate()

  //  Load user data from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    setUsername(user.username || "");
    setEmail(user.email || "");
    setPhone(user.phone || "");
    setAge(user.age || "");
    setPreview(user.profileImage || "");
  }, []);

  //  Upload image to Cloudinary
  const uploadImageToCloudinary = async (): Promise<string> => {
    if (!image) return preview;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Authentication");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/ddjehdwgu/image/upload",
      formData,
    );

    return res.data.secure_url;
  };

  //  Update profile
  const handleUpdateProfile = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      // upload new image if selected
      const imageUrl = await uploadImageToCloudinary();

      const updatedUser = {
        ...storedUser,
        username,
        email,
        phone,
        age,
        profileImage: imageUrl,
      };

      // update API
      await axios.put(
        `https://68e53f8521dd31f22cc11fee.mockapi.io/user/${storedUser.id}`,
        updatedUser,
      );

      // update localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DefaultLayout>
      <section className="min-h-screen flex items-center justify-center px-2">
        <Card className="w-full max-w-md shadow-xl rounded-2xl p-4">
          <h1 className="text-2xl text-center mb-2">Update Profile</h1>

          {/* Profile Image */}
          <CardHeader className="flex justify-center">
            {preview && (
              <Image
                src={image ? URL.createObjectURL(image) : preview}
                alt="profile"
                width={80}
                height={80}
                radius="full"
              />
            )}
          </CardHeader>

          <Divider />

          <CardBody className="space-y-4">
            <Form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateProfile();
              }}
            >
              <Input
                label="Username"
                labelPlacement="outside"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <Input
                label="Email"
                labelPlacement="outside"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Phone"
                labelPlacement="outside"
                placeholder="Enter phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Input
                label="Age"
                labelPlacement="outside"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <Input
                label="Upload Image"
                labelPlacement="outside"
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setImage(e.target.files[0]);
                  }
                }}
              />

              <Button
                type="submit"
                color="primary"
                className="w-full"
                onPress={() => navigate("/")}
              >
                Update Profile
              </Button>
            </Form>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}
