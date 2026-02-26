import { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "@/layouts/default";
import StudentTableCell from "@/components/StudentTableCell";
import { Button } from "@heroui/button";
import { SearchIcon } from "@/components/icons";
import {Divider} from "@heroui/react";
import { useLocation } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

import { Input } from "@heroui/input";

/* ---------- Types ---------- */

type DataItem = {
  id: string | number;
  name: string;
  rollnumber: string;
  department: string;
  marks: string;
  grade: string;
};

type ColumnKey =
  | "name"
  | "rollnumber"
  | "department"
  | "marks"
  | "grade"
  | "actions";

/* ---------- Columns ---------- */

const columns: { name: string; uid: ColumnKey }[] = [
  { name: "NAME", uid: "name" },
  { name: "ROLLNUMBER", uid: "rollnumber" },
  { name: "DEPARTMENT", uid: "department" },
  { name: "MARKS", uid: "marks" },
  { name: "GRADE", uid: "grade" },
  { name: "ACTIONS", uid: "actions" },
];

export default function UsersTable() {
  const [apiData, setApiData] = useState<DataItem[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
   const location = useLocation();

  /* ---------- Fetch ---------- */

  const getData = () => {
    axios
      .get("https://698ec424aded595c2532b6b0.mockapi.io/Students_data")
      .then((res) => setApiData(res.data))
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    getData();
  }, []);

  /* ---------- Delete ---------- */

  const handleDelete = (id: string) => {
    axios
      .delete(`https://698ec424aded595c2532b6b0.mockapi.io/Students_data/${id}`)
      .then(() => getData())
      .catch((err) => alert(err.message));
  };

  /* ---------- Search ---------- */

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  /* ---------- Edit ---------- */

  const setDataToStorage = (user: DataItem) => {
    localStorage.setItem("id", String(user.id));
    localStorage.setItem("name", user.name);
    localStorage.setItem("rollnumber", user.rollnumber);
    localStorage.setItem("department", user.department);
    localStorage.setItem("marks", user.marks);
    localStorage.setItem("grade", user.grade);
  };

  /* ---------- Filter ---------- */

  const filteredData =
    searchTerm.trim() === ""
      ? apiData
      : apiData.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  /* ---------- UI ---------- */

  return (
    <DefaultLayout>
       <div className="min-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Students Details </h1>
        <p className="text-small text-default-400">
          All Students details like marks, grade, rollnumbers 2025. 
        </p>

        <Divider className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-small">
          {location.pathname === "/read" ? (
            <>
             <div>Details Tables</div>
          <Divider orientation="vertical" />
            </>
          ):
          <>
          <div>Docs</div>
          <Divider orientation="vertical" />
          <div>Source</div>
          </>
         }
         
          
        </div>
      </div>
      <div className="flex flex-col items-center mt-2 gap-2">
        {/* SEARCH */}
        <div className="flex w-full justify-center items-center gap-2">
          <Input
            placeholder="Search by name..."
            className="w-[200px]"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <Button
            startContent={<SearchIcon />}
            variant="flat"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>

        {/* TABLE */}
        <Table aria-label="Students table" className="w-[1000px]">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align="center">
                {column.name}
              </TableColumn>
            )}
          </TableHeader>

          <TableBody items={filteredData}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell className="text-center">
                    <StudentTableCell
                      user={item}
                      columnKey={columnKey as ColumnKey}
                      onDelete={handleDelete}
                      onEdit={setDataToStorage}
                    />
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
