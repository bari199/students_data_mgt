import { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, Image, Divider, Button } from "@heroui/react";
import axios from "axios";
import { useParams } from "react-router-dom";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@heroui/react";

export default function StudentView() {
  const { id } = useParams(); 
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [student, setStudent] = useState<any>({});


   

  useEffect(() => {
     axios
      .get(`https://698ec424aded595c2532b6b0.mockapi.io/Students_data/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => alert(err.message));
  }, [id]);


if (!student) return <p className="text-center mt-10">Loading...</p>;
  


  const handleOpen = () => {
    onOpen();
  };

  return (
    <DefaultLayout>
      {/* HEADER */}
      <div className="min-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Students Details</h1>
        <p className="text-small text-default-400">
          Student full Details, attendance and Records 2025
        </p>

        <Divider className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-small">
        <Button color="success" onPress={handleOpen}>
          Notice
        </Button>
        <div>Blog</div>
        <Divider orientation="vertical" />
        <div>Docs</div>
        <Divider orientation="vertical" />
        <div>Source</div>
      </div>
      </div>

      {/* DRAWER */}
      <Drawer isOpen={isOpen} placement="left" onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>Notification</DrawerHeader>
              <DrawerBody>
                <p>This is student notification panel.</p>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>


      <section className="flex flex-wrap justify-center gap-6 py-10">
          <Card key={student.id} className="py-3 w-[300px]">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Student Image"
                className="object-cover rounded-xl"
                src={student?.image || "https://heroui.com/images/hero-card-complete.jpeg"}
                width={270}
              />
            </CardBody>

            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="font-semibold text-2xl">{student?.name}</p>

              <Divider className="my-2" />

              <p className="text-tiny uppercase font-bold">Roll Number</p>
              <small className="text-default-500">{student?.rollnumber}</small>

              <Divider className="my-2" />

              <p className="text-tiny uppercase font-bold">Marks</p>
              <p className="text-default-500 font-medium">
                {student?.marks}
              </p>

              <Divider className="my-2" />

              <div className="flex flex-row h-5 items-center space-x-4 text-small">
                <div>Department:</div>
                <small className="text-default-500">
                  {student?.department}
                </small>

                <Divider orientation="vertical" />

                <div>Grade:</div>
                <small className="text-default-500">
                  {student?.grade}
                </small>
              </div>
            </CardHeader>

            <div className="flex justify-center mt-3">
              <Button color="success">More</Button>
            </div>
          </Card>
      </section>
    </DefaultLayout>
  );
}