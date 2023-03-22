import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CustomCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image="https://via.placeholder.com/1000x200"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5">Card Title</Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis illum
          voluptate eos sapiente. Quos, voluptate ratione exercitationem quasi
          earum ducimus magni culpa distinctio, ipsam neque iure facere dolore
          quam cum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button variant="contained">Add</Button>
        <Button variant="outlined" color="warning">Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
