import {
  Avatar,
  Button,
  Card,
  CardHeader,
} from "@heroui/react";
import { useNavigate } from "react-router-dom";

export const UserTwitterCard = ({ user }: any) => {

  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/view-profile/${user?.id}`);
  };

  return (
    <Card className="max-w-[260px] border-none bg-transparent" shadow="none">
      <CardHeader className="justify-between">
        
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={user?.profileImage}
          />

          <div className="flex flex-col">
            <h4 className="text-small font-semibold">{user?.username}</h4>
            <h5 className="text-small text-default-500">{user?.email}</h5>
          </div>
        </div>

        <Button
          size="sm"
          radius="full"
          color="primary"
          onPress={handleViewProfile}
        >
          View
        </Button>

      </CardHeader>
    </Card>
  );
};