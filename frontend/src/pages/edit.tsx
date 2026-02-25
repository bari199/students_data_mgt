//import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody } from "@heroui/card";
//import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//https://698ec424aded595c2532b6b0.mockapi.io/Students_data

export default function DocsPage() {


  const [name, setName] = useState("");
  const [rollnumber, setRollnumber] = useState("");
  const [department, setDepartment] = useState("");
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    axios
    .post("https://698ec424aded595c2532b6b0.mockapi.io/Students_data",{
      name:name,
      rollnumber:rollnumber,
      department:department,
      marks:marks,
      grade:grade
    })
    .then((res)=>{
      navigate("/read");
      console.log(res.data)
    })
    .catch(()=>{
      alert("Error");
    })
    

  }

  return (
    <DefaultLayout>
      <section className="min-h-screen flex items-center justify-center px-2 mb-0.5">
        <Card className="w-full max-w-md shadow-xl rounded-2xl p-4">
          {/* Title */}
          <h1 className="text-2xl text-center mb-2">Update Page</h1>

          {/* Header */}
          <CardHeader className="flex justify-center">
            <Image
              alt="heroui logo"
              height={50}
              radius="sm"
              src="https://t4.ftcdn.net/jpg/09/17/99/35/360_F_917993594_H7Fs7Xyk6L3Qldu4xVX4VB3sew88Qmue.jpg"
              width={60}
            />
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

            <Form className="space-y-2" onSubmit={handleSubmit}>
              <Input
                isRequired
                label="Name"
                labelPlacement="outside"
                placeholder="Enter your name"
                type="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />

              <Input
                isRequired
                label="Roll Number"
                labelPlacement="outside"
                placeholder="Enter your roll number"
                type="rollnumber"
                value={rollnumber}
                onChange={(e)=>setRollnumber(e.target.value)}
              />
              <Input
                isRequired
                label="Department"
                labelPlacement="outside"
                placeholder="Enter your department"
                type="department"
                value={department}
                onChange={(e)=>setDepartment(e.target.value)}
              />
              <div className="flex flex-row space-x-2">
                <Input
                  isRequired
                  label="Marks"
                  labelPlacement="outside"
                  placeholder="Enter your marks"
                  type="marks"
                  value={marks}
                  onChange={(e)=>setMarks(e.target.value)}
                />

                <Input
                  isRequired
                  label="Grade"
                  labelPlacement="outside"
                  placeholder="Enter your Grade"
                  type="grade"
                  value={grade}
                  onChange={(e)=>setGrade(e.target.value)}
                />
              </div>

              <Button type="submit" color="primary" className="w-full">
                Submit
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
}