import { Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const Iconsection = () => {
  const theme=useTheme()
  return (
    <Container sx={{ mt:3, bgcolor: theme.palette.mode ==="dark"? "#000" :"#fff" }}>
      <Stack
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
        divider= {useMediaQuery('(min-width:600px)')? <Divider orientation="vertical" flexItem />:null}
      >
        <Mybox
          icon={<ElectricBoltIcon />}
          title={"fast delivery"}
          subtitle={"startvfrom $10"}
        />
        <Mybox
          icon={<WorkspacePremiumIcon />}
          title={"Money Gurarantee"}
          subtitle={"7 days Back"}
        />
        <Mybox
          icon={<AccessAlarmIcon />}
          title={"365 days"}
          subtitle={"for free return"}
        />
        <Mybox
          icon={<CreditScoreIcon />}
          title={"payment"}
          subtitle={"secure system"}
        />
      </Stack>
    </Container>
  );
};

export default Iconsection;
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";

// eslint-disable-next-line react/prop-types
const Mybox = ({ icon, title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent: "center",
        py: 1.6,
      }}
    >
      {icon}

      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secodary }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
