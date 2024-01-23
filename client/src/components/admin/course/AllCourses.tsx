import { FC, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { BsTrash3Fill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { FaEdit } from "react-icons/fa";
import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import Loader from "@/components/Loader/Loader";
import { timeAgo } from "@/utils/TimeAgo";
import DeleteCourseModal from "./DeleteCourseModal";
import Link from "next/link";

interface AllCoursesProps {}

const AllCourses: FC<AllCoursesProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [courseId, setCourseId] = useState<string>("");

  const { isLoading, data, error } = useGetAllCoursesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    { field: "title", headerName: "Course Title", width: 300 },
    { field: "ratings", headerName: "Ratings", width: 150 },
    { field: "purchased", headerName: "Purchased", width: 150 },
    { field: "created_at", headerName: "Created At", width: 180 },
    {
      field: "",
      headerName: "Edit",
      width: 110,

      renderCell: (params: any) => {
        return (
          <>
            <Link
              href={`/admin/edit-course/${params.row.id}`}
              className=" flex justify-start"
            >
              <FaEdit size={20} className="dark:text-white text-black" />
            </Link>
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
                setCourseId(params.row.id);
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
      data.courses.forEach((item: any) => {
        rows.push({
          id: item?._id,
          title: item.name,
          ratings: item.ratings,
          purchased: item.purchased,
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
          {open && <DeleteCourseModal setOpen={setOpen} courseId={courseId} />}
        </Box>
      )}
    </div>
  );
};

export default AllCourses;
