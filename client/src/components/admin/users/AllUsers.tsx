"use client";

import { FC, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { BsTrash3Fill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { FaEdit, FaEnvelope } from "react-icons/fa";
import Loader from "@/components/Loader/Loader";
import { openURLInNewTab, timeAgo } from "@/utils/TimeAgo";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import DeleteUser from "./DeleteUser";

interface AllUsersProps {}

const AllUsers: FC<AllUsersProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<string>("");

  const { isLoading, data, error } = useGetAllUsersQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    { field: "name", headerName: "Name", width: 160 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 110 },
    { field: "courses", headerName: "Purchased Courses", width: 150 },
    { field: "created_at", headerName: "Joined At", width: 150 },

    {
      field: "",
      headerName: "Email",
      width: 110,
      renderCell: (params: any) => {
        return (
          <>
            {/* <Button
              onClick={() => openURLInNewTab(`mailto:${params?.row.email}`)}
            >
              <FaEnvelope size={20} className="dark:text-white text-black" />
            </Button> */}
            <a href={`mailto:${params?.row.email}`}>
              <Button sx={{ display: "flex", justifyContent: "left" }}>
                <FaEnvelope size={20} className="dark:text-white text-black" />
              </Button>
            </a>
          </>
        );
      },
    },
    {
      field: "  ",
      headerName: "Delete",
      width: 110,
      renderCell: (params: any) => {
        return (
          <>
            <Button
              onClick={() => {
                setOpen(!open);
                setUserId(params.row.id);
              }}
              sx={{ display: "flex", justifyContent: "left" }}
            >
              <BsTrash3Fill size={20} className="dark:text-white text-black" />
            </Button>
          </>
        );
      },
    },
  ];

  const rows: any[] = [];

  {
    data &&
      data.users.forEach((item: any) => {
        rows.push({
          id: item._id,
          name: item.name,
          email: item.email,
          role: item.role,
          courses: item.courses.length,
          created_at: timeAgo(item.createdAt),
        });
      });
  }

  return (
    <div className=" mt-[80px] sm:ml-64  bg-transparent">
      {isLoading ? (
        <Loader />
      ) : (
        <Box m="20px">
          <Box
            m="40px 0 0 0"
            height="80vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #535353 !important"
                    : "1px solid #ccc !important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column-cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme === "dark" ? "#1b1b1b" : "#e8edf1",
                borderBottom: "none",
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme === "dark" ? "#2c2c2c" : "#f2f0f0",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: theme === "dark" ? "#1b1b1b" : "#e8edf1",
                borderTop: "none",
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiCheckbox-root": {
                color: theme === "dark" ? "#fff !important" : "#000 !important",
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: "#fff !important",
              },
            }}
          >
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>
          {open && <DeleteUser setOpen={setOpen} userId={userId} />}
        </Box>
      )}
    </div>
  );
};

export default AllUsers;
