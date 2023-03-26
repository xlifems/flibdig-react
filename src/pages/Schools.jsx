import { Box, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import SchoolCard from "../components/SchoolCard";
import SchoolForm from "../components/SchoolForm";
import { useGetSchoolsQuery } from "../features/shool/apiSchoolSlice";

const Schools = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (val) => {
    setOpen(val);
  };

  const {
    data: schools,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    error: getError,
  } = useGetSchoolsQuery({ refetchOnMountOrArgChange: true });

  return (
    <div>
      <Button variant="outlined" onClick={() => handleClickOpen(true)}>
        Open form dialog
      </Button>
      <SchoolForm open={open} handleClickOpen={handleClickOpen} />
      {isGetSuccess &&
        schools.map((item) => (
          <Box key={item.id} sx={{ mt: 2, mb: 2 }}>
            <SchoolCard school={item}></SchoolCard>
          </Box>
        ))}
    </div>
  );
};

export default Schools;
