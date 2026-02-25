import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import DefaultLayout from "@/layouts/default";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

import { Tooltip } from "@heroui/tooltip";
import { User } from "@heroui/user";
import { Chip } from "@heroui/chip";
import { EyeIcon, EditIcon, DeleteIcon } from "lucide-react";

/* -------------------- Columns -------------------- */

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLLNUMBER", uid: "rollnumber" },
  { name: "DEPARTMENT", uid: "department" },
  { name: "MARKS", uid: "marks" },
  { name: "GRADE", uid: "grade" },
//   { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

/* -------------------- Types -------------------- */

type DataItem = {
  id: string;
  name: string;
  rollnumber: string;
  department: string;
  marks: string;
  grade: string;
//   status: "active" | "paused" | "vacation";
  avatar?: string;
};

type ColumnKey =
  | "name"
  | "rollnumber"
  | "department"
  | "marks"
  | "grade"
//   | "status"
  | "actions";

/* -------------------- Status Colors -------------------- */

// const statusColorMap: Record<
//   "active" | "paused" | "vacation",
//   "success" | "danger" | "warning"
// > = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

/* -------------------- Main Component -------------------- */

export default function UsersTable() {
  const [apiData, setApiData] = useState<DataItem[]>([]);

  /* -------- Fetch Data -------- */

  const getData = () => {
    axios
      .get("https://698ec424aded595c2532b6b0.mockapi.io/Students_data")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };

  /* -------- Delete -------- */

  const handleDelete = (id: string) => {
    axios
      .delete(
        `https://698ec424aded595c2532b6b0.mockapi.io/Students_data/${id}`
      )
      .then(() => {
        getData();
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };

  /* -------- Save Data To LocalStorage -------- */

  const setDataToStorage = (user: DataItem) => {
    localStorage.setItem("id", user.id);
    localStorage.setItem("name", user.name);
    localStorage.setItem("rollnumber", user.rollnumber);
    localStorage.setItem("department", user.department);
    localStorage.setItem("marks", user.marks);
    localStorage.setItem("grade", user.grade);
  };

  useEffect(() => {
    getData();
  }, []);

  /* -------- Render Cell -------- */

  const renderCell = useCallback(
    (user: DataItem, columnKey: ColumnKey) => {
      const cellValue = user[columnKey as keyof DataItem];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{
                radius: "lg",
                src:
                  user.avatar ||
                  "https://i.pravatar.cc/150?u=" + user.id,
              }}
              name={user.name}
            />
          );

        // case "status":
        //   return (
        //     <Chip
        //       className="capitalize"
        //       color={statusColorMap[user.status]}
        //       size="sm"
        //       variant="flat"
        //     >
        //       {user.status}
        //     </Chip>
        //   );

        case "actions":
          return (
            <div className="relative flex items-center gap-3 justify-center">
              <Tooltip content="Details">
                <span className="cursor-pointer">
                  <EyeIcon size={18} />
                </span>
              </Tooltip>

              <Tooltip content="Edit user">
                <span
                  onClick={() => setDataToStorage(user)}
                  className="cursor-pointer"
                >
                  <EditIcon size={18} />
                </span>
              </Tooltip>

              <Tooltip color="danger" content="Delete user">
                <span
                  onClick={() => handleDelete(user.id)}
                  className="text-danger cursor-pointer"
                >
                  <DeleteIcon size={18} />
                </span>
              </Tooltip>
            </div>
          );

        default:
          return cellValue;
      }
    },
    [handleDelete]
  );

  /* -------- UI -------- */

  return (
    <DefaultLayout>
      <div className="flex justify-center mt-10">
        <Table aria-label="Students table" className="w-[1000px]">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align="center">
                {column.name}
              </TableColumn>
            )}
          </TableHeader>

          <TableBody items={apiData}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell className="text-center">
                    {renderCell(
                      item as DataItem,
                      columnKey as ColumnKey
                    )}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </DefaultLayout>
  );
}