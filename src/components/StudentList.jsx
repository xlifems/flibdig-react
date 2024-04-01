import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";

import {
  useGetCertificateQuery,
  useGetPDFCertificateMutation,
  useGetStudentsQuery,
} from "../features/student/apiStudentSlice";
import { Box, IconButton } from "@mui/material";

import { getCertificate } from "../features/student/studentSlice";
import { useSelector, useDispatch } from "react-redux";

export default function StudentList() {
  const dispatch = useDispatch();
  const {
    data: students,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    error: getError,
  } = useGetStudentsQuery({ refetchOnMountOrArgChange: true });

  const [getPDFCertificate, response] = useGetPDFCertificateMutation();

  const downloadCertificate = (id) => {
    const payload = {
      student_id: id,
    };

    getPDFCertificate(payload)
      .unwrap()
      .then(async (response) => {
        var hiddenElement = document.createElement("a");

        hiddenElement.href = response.data;
        hiddenElement.target = "_blank";
        hiddenElement.download = `${payload.student_id}_report.pdf`;
        hiddenElement.click();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
      });
  };

  return (
    <>
      {isGetLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {isGetSuccess && (
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {students.map((item) => (
            <Box key={item.id}>
              <ListItem
                alignItems="flex-start"
                secondaryAction={
                  // Icon button to download the certificate
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => dispatch(getCertificate(item.id))}
                  >
                    <DownloadIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  primary={item.first_name + "" + item.last_name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.email}
                      </Typography>
                      {item.address}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          ))}
        </List>
      )}

      {isGetError && (
        <div className="alert alert-danger" role="alert">
          {getError}
        </div>
      )}
    </>
  );
}
