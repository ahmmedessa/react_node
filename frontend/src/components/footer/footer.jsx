import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
    
      sx={{
        
        bgcolor: "#2b3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        variant="h6"
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
            border:1
          }}
          variant="text"
          color="primary"
        >
          ahmmed essa
        </Button>
        2024
      </Typography>
    </Box>
  );
};

export default Footer;
