import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalWindow from "../../UI/Modal";

export default function MenuItems({ clickedMenu }) {
  return (
    <>
      {clickedMenu.map((menu) => (
        <Card sx={{ maxWidth: 345 }} key={menu.id}>
          <CardMedia
            component="img"
            alt={menu.title}
            height="140"
            image={menu.img}
            sx={{ height: "250px" }}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {menu.title}
            </Typography>
            <Typography
              sx={{ height: "100px" }}
              variant="body2"
              color="text.secondary"
            >
              {menu.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              sx={{ fontSize: "18px", color: "tomato" }}
            >
              $ {menu.price}
            </Button>
            <Button size="small" variant="contained">
              Add to cart
            </Button>
            <Button size="small" variant="contained">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
