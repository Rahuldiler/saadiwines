import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const navItems = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "#about" },
    { title: "Our Services", url: "#services" },
    { title: "Feedbacks", url: "#feedbacks" },
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
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <header style={{ position: "absolute", left: 0 }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: colorChange ? "#fff" : "transparent",
          marginTop: colorChange ? "0px" : "40px",
          boxShadow: !colorChange && "none",
          color: colorChange ? "#000" : "#fff",
        }}
      >
        <Toolbar
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "1280px",
            color: colorChange ? "#000" : "#fff",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
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
              display: { xs: "none", sm: "block" },
              fontSize: "28px",
            }}
          >
            ShaadiVines
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
                }}
              >
                {item.title}
              </Link>
            ))}
          </Box>
          <Button
            style={{
              backgroundColor: "#E21A9E",
              color: "#fff",
              marginLeft: "100px",
              padding: "7px 16px",
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
