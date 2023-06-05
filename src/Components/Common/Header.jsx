import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ handleOpen, setHandle }) {
  const navItems = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "#about" },
    { title: "Our Services", url: "#services" },
    { title: "Reviews", url: "#reviews" },
    { title: "Contact Us", url: "#contact" },
  ];

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "start",
        background: "#fff",
        width: "100%",
        color: "#000",
      }}
    >
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              href={item.url}
              key={item}
              sx={{
                color: "#000",
                padding: "0px 20px",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              <ListItemText primary={item.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleOpenDialog = () => {
    handleOpen();
    setHandle(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange]);
  return (
    <header style={{ position: "absolute", left: 0 }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: colorChange
            ? "#fff"
            : mobileOpen
            ? "#fff"
            : "transparent",
          boxShadow: !colorChange && "none",
          color: colorChange ? "#000" : "#fff",
        }}
      >
        <Toolbar
          sx={{
            color: colorChange ? "#000" : "#fff",
          }}
        >
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="vibeFont"
            sx={{
              flexGrow: 1,
              // display: { xs: "none", sm: "block" },
              fontSize: "36px",
              fontWeight: 700,
              mt: "5px",
            }}
          >
            <span className="vibeFont" style={{ color: "#E21A9E" }}>
              Shaadi
            </span>
            <span className="vibeFont" style={{ color: "#BC8129" }}>
              Vines
            </span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                sx={{
                  color: colorChange ? "#000" : "#fff",
                  padding: "0px 20px",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              >
                {item.title}
              </Link>
            ))}
          </Box>

          <Button
            onClick={handleOpenDialog}
            style={{
              backgroundColor: "#E21A9E",
              color: "#fff",
              marginLeft: "16px",
              padding: "7px 16px",
            }}
          >
            Login
          </Button>
        </Toolbar>
        {mobileOpen && (
          <Box
            component="nav"
            sx={{ position: "relative", zIndex: 10, width: "100%" }}
          >
            {drawer}
          </Box>
        )}
      </AppBar>
    </header>
  );
}

export default Header;
