import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexDirection:{xs:"column",sm:"row"}}}>
      <Box sx={{display:"flex"}}>
        <img  width={300} height={300} src="src\images\banner-15.jpg" alt="" />
      </Box>

      <Box sx={{ bgcolor: "" ,textAlign:{xs:"center",sm:"left"}}}>
        <Typography variant="h5" color={""} sx={{}}>WOMEN FASHION</Typography>
        <Typography
          my={0.4}
          fontSize={"22px"}
          color={"crimson"}
          variant="body2"
        >
          $12.99
        </Typography>
        <Typography color={""}>
          lizards are a widespread group of squamate reptiles ,with species ,
          ranging across all continets except antarctica
        </Typography>
        <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} direction={"row"} gap={1} my={1}>
          {["src/images/banner-17.jpg", "src/images/banner-25.jpg"].map(
            (item) => {
              return (
                <img
                  style={{ borderRadius: 3 }}
                  key={item}
                  src={item}
                  width={90}
                  height={100}
                  alt=""
                />
              );
            }
          )}
        </Stack>
        <Button sx={{ textTransform: "capitalize" ,my:1}} variant="contained">
          <AddShoppingCartOutlined sx={{mr:1,} } fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
