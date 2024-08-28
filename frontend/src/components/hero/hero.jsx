import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./slider.css";

import Iconsection from "./iconsection";

const myslider = [
  { text: "Men", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
]
const Hero = () => {
  
  return (
    <Container >
    <Box  sx={{ pt:2,mt: 2.5, display: "flex", alignItems: "ceter", gap: 2 }}>
        <Swiper
        loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {myslider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    position: "absolute",
                    left: "10%",
                    textAlign: "left",
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h6">
                    LIFESTYLE COLLECTION
                  </Typography>
      
                  <Typography
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                    variant="h4"
                  >
                    {item.text}
                  </Typography>
                  <Stack direction={"row"}>
                    <Typography color={"#333"} mr={1} variant="h4">
                      SALE UP TO
                    </Typography>
      
                    <Typography color={"#c11"} variant="h4">
                      30%OFF
                    </Typography>
                  </Stack>
      
                  <Typography
                    color={"#000"}
                    fontWeight={300}
                    my={1}
                    variant="body1"
                  >
                    Get free shopping on orders over $99.00
                  </Typography>
      
                  <Button
                    sx={{
                      backgroundColor: "#222",
                      color: "#fff",
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      my: 2,
                      px: 5,
                      py: 1,
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      },
                    }}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\banner-17.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 33,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2b3445", fontSize: "18px" }}
              >
                ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#283445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                summer
              </Typography>
              <Typography variant="h6" sx={{ color: "#2b3445" }}>
                Sall 20% off
              </Typography>
              <Link
                sx={{
                  color: "#2b3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 33,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2b3445", fontSize: "16px" }}
              >
                GAMING 4K
              </Typography>
              <Typography
                // @ts-ignore
                variant="h8"
                sx={{
                  color: "#283445",
                  lineHeight: "14px",
                  mt: 1,
                }}
              >
                DESKTOP &
              </Typography>
              <Typography 
// @ts-ignore
              variant="h8" sx={{ color: "#2b3445" }}>
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#2b3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
    </Box>
      <Iconsection/>
    </Container>
  );
};

export default Hero;
