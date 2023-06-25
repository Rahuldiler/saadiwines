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
import { useRouter } from "next/router";
import Image from "next/image";

function Header({ handleOpen, setHandle, navItems, isHome }) {
  const [colorChange, setColorchange] = useState(false);
  const router = useRouter();
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
        {navItems.map((item, index) => (
          <Box key={index}>
            {item && (
              <ListItem disablePadding>
                <Link
                  href={item.url}
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
            )}
          </Box>
        ))}
      </List>
    </Box>
  );

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    router.push("/");
  };

  const handleOpenDialog = () => {
    handleOpen();
    setHandle(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange]);

  return (
    <header style={{ position: "sticky", left: 0,  top: 0}}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: colorChange
            ? "#fff"
            : mobileOpen
            ? "#fff"
            : isHome
            ? "transparent"
            : "#fff",
          boxShadow: !colorChange && isHome ? "none" : "0px 0px 10px #000",
          color: colorChange ? "#000" : "#fff",
        }}
      >
        <Toolbar
          sx={{
            color: colorChange ? "#000" : "#fff",
            display: { xs: "flex" },
            justifyContent: { xs: "space-between" },
            alignItems: { xs: "center" },
            p: 2,
          }}
        >
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Image
            width={1000}
            height={1000}
            src="/assets/Logo.svg"
            alt="Logo"
            className="header-logo"
            style={{ height: "40px", width: "auto", marginRight: "10px" }}
          />
          <Box sx={{ display: { lg: "none", sm: "block" } }}>
            {isHome ? (
              <Button
                onClick={handleOpenDialog}
                style={{
                  backgroundColor: "#E21A9E",
                  color: "#fff",
                  padding: "7px 16px",
                }}
              >
                Login
              </Button>
            ) : (
              <Button
                onClick={handleLogout}
                style={{
                  color: "#E21A9E",
                  // color: "#fff",
                  fontWeight: 500,

                  padding: "7px 16px",
                }}
              >
                Logout
              </Button>
            )}
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            {navItems.map((item, index) => (
              <Box key={index}>
                {item && (
                  <Link
                    href={item.url}
                    sx={{
                      color: colorChange ? "#000" : isHome ? "#fff" : "#000",
                      padding: "0px 20px",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: "20px",
                    }}
                  >
                    {item.title}
                  </Link>
                )}
              </Box>
            ))}
            {isHome ? (
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
            ) : (
              <Button
                onClick={handleLogout}
                style={{
                  color: "#E21A9E",
                  // color: "#fff",
                  fontWeight: 500,

                  marginLeft: "16px",
                  padding: "7px 16px",
                }}
              >
                Logout
              </Button>
            )}
          </Box>
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
