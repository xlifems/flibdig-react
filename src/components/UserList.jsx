import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';

import {
  useGetPostsQuery,
  useAddNewPostMutation,
} from "../features/user/apiSlice";
import { Box, IconButton } from "@mui/material";

export default function UserList() {
  const {
    data: posts,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    error: getError,
  } = useGetPostsQuery({ refetchOnMountOrArgChange: true });

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
          {posts.map((item) => (
            <Box key={item.id}>
              <ListItem
                alignItems="flex-start"
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
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
