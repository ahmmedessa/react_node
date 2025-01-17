import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Container, IconButton, InputBase, List, ListItemButton, ListItemText, Menu, MenuItem, Stack, styled, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { useTheme } from "@emotion/react";




const options = [
 'car',
 'bus',
 'motor'
];


const Search = styled("div")(({ theme }) => ({
  flexGrow:0.4,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border:"2px solid #999",
  '&:hover': {
   border:"2px solid #111",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  Width:"277px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header2 =() =>{
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event,
    index
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme= useTheme();
  return(
    <Container sx={{my:3,display:"flex",justifyContent:"space-between"} }>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined/>
                      <Typography variant="body2">E-commerce</Typography>
      </Stack>
      <Search sx={{borderRadius:"22px",display:"flex",justifyContent:"space-between"}}>
            <SearchIconWrapper sx={{color:"#aaa"}} >
              <SearchIcon />
            </SearchIconWrapper >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
              <div>
      <List
        component="nav"
        aria-label="Device settings"
        // @ts-ignore
        sx={{ bgcolor:theme.palette.mycolor.main,
        borderTopRightRadius:22,
        borderBottomRightRadius:22,
        padding:"0px",
         }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
          className="border"
            sx={{width:80 ,textAlign:"center","&:hover":"cursor"}}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{fontSize:"16px"}}/>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{fontSize:"13px"}}
            key={option}
         
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
          </Search>



       <Stack direction={"row"} alignItems={"center"}>
          <IconButton>
            <Person2OutlinedIcon/>
          </IconButton>
          <IconButton aria-label="cart">
         <StyledBadge badgeContent={4} color="secondary">
           <ShoppingCartIcon />
           </StyledBadge>
           </IconButton>
       </Stack>



    </Container>
  );
}
export default Header2;