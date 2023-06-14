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

function Header({ handleOpen, setHandle, navItems, isHome }) {
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
        {navItems.map((item, index) => (
          <>
            {item && (
              <ListItem key={item.id} disablePadding>
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
            )}
          </>
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
              <>
                {item && (
                  <Link
                    href={item.url}
                    key={item.id}
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
              </>
            ))}
          </Box>

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
              // onClick={handleOpenDialog}
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
