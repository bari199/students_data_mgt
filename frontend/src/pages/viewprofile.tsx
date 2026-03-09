import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Button,
} from "@heroui/react";

import { Avatar } from "@heroui/react";
import axios from "axios";

function ViewProfile() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://68e53f8521dd31f22cc11fee.mockapi.io/user/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [id]);

  return (
    <DefaultLayout>
      <div className="min-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Users Details</h1>
        <p className="text-small text-default-400">
          Users full Details, attendance and Records 2025
        </p>
        <Divider className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-small">
          <Button color="success">Notice</Button>
          <div>Blog</div>
          <Divider orientation="vertical" />
          <div>Docs</div>
          <Divider orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
      <section className="flex flex-wrap justify-center gap-6 py-10">
        <Card className="py-3 w-[300px]">
          <CardBody className="overflow-visible py-2 flex flex-col items-center justify-center ">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={user?.profileImage}
            />
            <p className="font-semibold text-2xl">{user?.username}</p>
          </CardBody>

          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="font-semibold text-2xl">{user?.name}</p>

            <Divider className="my-2" />

            <p className="text-tiny uppercase font-bold">Email</p>
            <small className="text-default-500">{user?.email}</small>

            <Divider className="my-2" />

            <p className="text-tiny uppercase font-bold">Age</p>
            <p className="text-default-500 font-medium">{user?.age}</p>

            <Divider className="my-2" />

            <div className="flex flex-row h-5 items-center space-x-4 text-small">
              <div> Phone:</div>
              <small className="text-default-500">{user?.phone}</small>
            </div>
          </CardHeader>

          <div className="flex justify-center mt-3">
            <Button
              color="success"
              onPress={() => navigate(`/editprofile/${user?.id}`)}
            >
              Edit
            </Button>
          </div>
        </Card>
      </section>
    </DefaultLayout>
  );
}

export default ViewProfile;
