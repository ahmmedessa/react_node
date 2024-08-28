import { Accordion,  AccordionSummary, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem,  Stack,  Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useTheme } from "@emotion/react";
import MenuIcon from '@mui/icons-material/Menu';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Close,} from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Links from "./links";










const Header3 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  const theme =useTheme();
  const [state, setState] = useState({
    left: false,
    bottom: false,
    "top": false,
    right: false,
  });

  const toggleDrawer =
    (anchor , open ) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' ||
          event .key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };



    return (
        <Container sx={{display:"flex",
         alignItems:"center",
         justifyContent:"space-between",
         mt:5}}>
              
        


<Box>
  
               <Button 
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{width:222,bgcolor:theme.palette.mycolor.main,color:theme.palette.text.secondary}}
        >
        <WindowOutlinedIcon/>
        <Typography sx={{
          padding:"0",
          mx:1,
          textTransform: "capitalize"
        }}
          >
          categories
          </Typography>
          <Box flexGrow={1}/>
          <KeyboardArrowRightOutlinedIcon />
  
        </Button>
        <Menu 
          
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{".MuiPaper-root":{width:220,bgcolor:theme.palette.mycolor.main}}}
          
        >
          <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>profile</ListItemText>
          
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ComputerOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Electronics</ListItemText>
          
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBookOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>profile</ListItemText>
          
        </MenuItem>
        

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>profile</ListItemText>
          
        </MenuItem>
        
        
        </Menu>
  </Box>
  {useMediaQuery('(min-width:1000px)')  &&(
 <Stack gap={4} direction={"row"}>
   <Links title={"Home"} />
   <Links title={"Mega Menu"} />
   <Links title={"Full screen Menu"} />
   <Links title={"pages"} />
   <Links title={"user aacount"} />
   <Links title={"vendor account"} />
 </Stack>
  )}
 

{useMediaQuery('(max-width:1000px)')  && (<IconButton  onClick={toggleDrawer("top", true)}>
  <MenuIcon/>
 </IconButton>)}


 <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper":{height:"100%"}}}
          >

          <Box sx={{width:444,mx:"auto",mt:6,position:"relative",pt:10}}>
             <IconButton  sx={{ ":hover":{ color:"red", rotate:"180deg",transition:"0.3s"},  position:"absolute",top:0,right:10}} onClick={toggleDrawer("top", false)}>
              <Close />
             </IconButton>

            {[{mainlink:"home",sublink:["link1","link2","link3"]}
            ,{mainlink:"MegaMenu",sublink:["link1","link2","link3"]},
            {mainlink:"full screen Menu",sublink:["link1","link2","link3"]},
            {mainlink:"pages",sublink:["link1","link2","link3"]},
            {mainlink:"user account",sublink:["link1","link2","link3"]},
            {mainlink:"vendor account",sublink:["link1","link2","link3"]}].map((item)=>{
              return(
            <Accordion  key={item.mainlink} elevation={0} sx={{bgcolor:"initial"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {item.mainlink}
        </AccordionSummary>

        
        <List sx={{py:0,my:0}}>
        {item.sublink.map((link)=>{
          return(
              <ListItem  key={link} sx={{py:0,my:0}}>
            <ListItemButton>
              <ListItemText primary={link} />
            </ListItemButton>
          </ListItem>
          )
        })}
         
        </List>
      </Accordion>
              )
            })}


          </Box>

             </Drawer>
            
        </Container>
    );
}

export default Header3;
