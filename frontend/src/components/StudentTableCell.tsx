import { User } from "@heroui/user";
import { Tooltip } from "@heroui/tooltip";
import { EyeIcon, EditIcon, DeleteIcon } from "lucide-react";
import { Link } from "react-router-dom";

type DataItem = {
  id: string | number;
  name: string;
  rollnumber: string;
  department: string;
  marks: string;
  grade: string;
  avatar?: string;
};

type ColumnKey =
  | "id"
  | "name"
  | "rollnumber"
  | "department"
  | "marks"
  | "grade"
  | "actions";

type Props = {
  user: DataItem;
  columnKey: ColumnKey;
  onDelete: (id: string) => void;
  onEdit: (user: DataItem) => void;
};

export default function StudentTableCell({
  user,
  columnKey,
  onDelete,
  onEdit,
}: Props) {
  const cellValue = user[columnKey as keyof DataItem];

  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{
            radius: "lg",
            src: user.avatar || "https://i.pravatar.cc/150?u=" + user.id,
          }}
          name={user.name}
        />
      );

    case "actions":
      return (
        <div className="flex items-center gap-3 justify-center">
          <Tooltip content="Details">
            <Link to={`/studentview/${user.id}`}>
             <span className="cursor-pointer">
              <EyeIcon size={18} />
            </span>
            </Link>
          </Tooltip>

          <Link to="/edit">
            <span onClick={() => onEdit(user)} className="cursor-pointer">
              <EditIcon size={18} />
            </span>
          </Link>

          <Tooltip color="danger" content="Delete user">
            <span
              onClick={() => onDelete(String(user.id))}
              className="text-danger cursor-pointer"
            >
              <DeleteIcon size={18} />
            </span>
          </Tooltip>
        </div>
      );

    default:
      return <>{cellValue}</>;
  }
}
