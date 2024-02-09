"use client";

import { FC, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { BsTrash3Fill } from "react-icons/bs";
import { useTheme } from "next-themes";
import Loader from "@/components/Loader/Loader";
import { openURLInNewTab, timeAgo } from "@/utils/TimeAgo";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { useGetAllOrdersQuery } from "@/redux/features/orders/ordersApi";
import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { FaEnvelope } from "react-icons/fa";

interface AllInvoicesProps {
  isDashboard?: boolean;
}

const AllInvoices: FC<AllInvoicesProps> = ({ isDashboard }) => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(false);

  const { isLoading, data, error } = useGetAllOrdersQuery({});
  const { data: usersData } = useGetAllUsersQuery({});
  const { data: coursesData } = useGetAllCoursesQuery({});

  const [orderData, setOrderData] = useState<any>([]);

  useEffect(() => {
    if (data) {
      const temp = data.orders.map((item: any) => {
        const user = usersData?.users.find(
          (user: any) => user._id === item.userId
        );
        const course = coursesData?.courses.find(
          (course: any) => course._id === item.courseId
        );
        return {
          ...item,
          userName: user?.name,
          userEmail: user?.email,
          title: course?.name,
          price: "N" + course?.price,
        };
      });
      setOrderData(temp);
    }
  }, [coursesData?.courses, data, usersData?.users]);

  console.log(orderData);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "name", headerName: "Name", flex: isDashboard ? 0.6 : 0.5 },
    ...(isDashboard
      ? []
      : [
          { field: "email", headerName: "Email", flex: 1 },
          { field: "title", headerName: "Course Title", flex: 1 },
        ]),
    { field: "price", headerName: "Price", flex: 0.5 },
    ...(isDashboard
      ? [{ field: "created_at", headerName: "Created At", flex: 0.5 }]
      : [
          {
            field: " ",
            headerName: "Email",
            flex: 0.2,
            renderCell: (params: any) => {
              return (
                <a href={`mailto:${params.row.email}`}>
                  <Button sx={{ display: "flex", justifyContent: "left" }}>
                    <FaEnvelope
                      size={20}
                      className="dark:text-white text-black"
                    />
                  </Button>
                </a>
              );
            },
          },
        ]),
  ];

  const rows: any = [
    // {
    //   id: "7728kdjnjds",
    //   name: "Omoyele olabode",
    //   email: "jj@gmail.com",
    //   title: "React js",
    //   price: "N500",
    //   created_at: "2 days ago",
    // },
  ];

  orderData &&
    orderData.forEach((item: any) => {
      rows.push({
        id: item._id,
        name: item.userName,
        email: item.userEmail,
        title: item.title,
        price: item.price,
        created_at: timeAgo(item?.createdAt),
      });
    });

  return (
    <div
      className={` ${isDashboard ? "" : "mt-[80px] sm:ml-64 "}  bg-transparent`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <Box m={isDashboard ? "0" : "20px"}>
          <Box
            m={isDashboard ? "0" : "30px 0 0 0"}
            height={isDashboard ? "35vh" : "80vh"}
            overflow={"hidden"}
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
            <DataGrid
              checkboxSelection={isDashboard ? false : true}
              rows={rows}
              columns={columns}
              components={isDashboard ? {} : { Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default AllInvoices;
