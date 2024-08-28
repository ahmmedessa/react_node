import { useTheme } from "@emotion/react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../redux/product";
const Main = () => {
 

  const handleAlignment = (event, newvalue) => {
    
    setmydata(newvalue);
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allproducts = "products?populate=*";
  const men = "products?populate=*&filters[productcategory][$eq]=men";
  const women = "products?populate=*&filters[productcategory][$eq]=women";

  const [mydata, setmydata] = useState(allproducts);

  const { data, error, isLoading } = useGetproductByNameQuery(mydata);
  if (isLoading) {
    return <Typography variant="h6">LODING...........</Typography>;
  }
  if (error) {
    return (
      <Typography variant="h6">
        {
          // @ts-ignore
          error.message
        }
      </Typography>
    );
  }
  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          flexWrap={"wrap"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
        >
          <Box>
            <Typography variant="h6">selected product</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={mydata}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allproducts}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary, mx: "16px !important" }}
              className="myButton"
              value={men}
              aria-label="centered"
            >
              MEN Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={women}
              aria-label="right aligned"
            >
              WOMEN Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {data.data.map((iteme) => {
            return (
              <Card
                key={iteme}
                sx={{
                  maxWidth: 335,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.35",
                    rotate: "1deg",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="240"
                  // @ts-ignore
                  image={`${
                    iteme.attributes.productimg.data[0].attributes.url
                  }`}
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {iteme.attributes.producttitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      {iteme.attributes.productprice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {iteme.attributes.productdescription}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <AddShoppingCartIcon sx={{ mr: 1.5 }} fontSize="small" />
                    Add To Card
                  </Button>
                  <Rating
                    name="read-only"
                    precision={0.5}
                    value={iteme.attributes.productrating}
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>
        <Dialog
          sx={{
            ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
