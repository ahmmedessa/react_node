import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Links = ({ title }) => {
  return (
    <Box
      sx={{
        border:2,
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor: "pointer" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 20,
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box>
        <Paper
          className="show-when-hover"
          sx={{
            position: "absolute",
            top: "100%",
            minWidth: "170px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "none",
          }}
        >
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="dashbord"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  ":hover .sub-link": { display: "block" },
                  position: "relative",
                }}
              >
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="products"
                  />

                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlinedIcon />
                </ListItemButton>
                <Box
                  className="sub-link"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    display: "none",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: 150 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="addprodect" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="editproducet" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="orders"
                  ></ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="profile"
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
