import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";

function Footer() {
  const socialFooter = [
    {
      icon: <FaFacebookF size={20} />,
    },
    {
      icon: <BsTwitter size={20} />,
    },
    {
      icon: <FiInstagram size={20} />,
    },
  ];

  const listNav = [
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Our Services",
      url: "/services",
    },
    {
      title: "Feedbacks",
      url: "#feedbacks",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  const contactInfo = [
    {
      value: "shaadivines@gmail.com",
      icon: <HiMail style={{ marginRight: 4 }} />,
    },
    {
      value: "+888 (123) 869523",
      icon: <FaPhone style={{ marginRight: 4 }} />,
    },
    {
      value: "New York – 1075 Firs Avenue",
      icon: <ImLocation style={{ marginRight: 4 }} />,
    },
  ];

  const templateDesign = [
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
  ];
  return (
    <footer style={{ background: "#fff0e6" }}>
      <Box className="layoutMargin" sx={{ py: 10 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={4} sx={{ pr: 10 }}>
            <Typography
              variant="h6"
              component="div"
              className="vibeFont"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontSize: "36px",
              }}
            >
              ShaadiVines
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#000", fontSize: "16px" }}
            >
              Welcome and open yourself to your truest love this year with us!
              With the Release Process
            </Typography>
            <Box sx={{ mt: 4, display: "flex" }}>
              {socialFooter.map((item, index) => {
                return (
                  <Link
                    sx={{
                      background: "#fff",
                      p: 2,
                      color: "#002642",
                      borderRadius: "7px",
                      cursor: "pointer",
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      width: "20px",
                      "&:hover": {
                        background: "#002642",
                        color: "#fff",
                      },
                    }}
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2}>
            <Typography variant="h6" sx={{ fontWeight: 300, fontSize: "26px" }}>
              Information
            </Typography>
            <List sx={{ p: 0, m: 0, color: "#000", fontWeight: 400 }}>
              {listNav.map((nav, index) => {
                return (
                  <ListItem sx={{ p: 0, mt: 2, cursor: "pointer" }}>
                    <Link sx={{ color: "inherit", textDecoration: "none" }}>
                      {nav.title}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 300, fontSize: "26px" }}>
              Contact
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#000", fontSize: "16px", my: 2 }}
            >
              Would you have any enquiries.Please feel free to contuct us
            </Typography>
            {contactInfo.map((item, index) => {
              return (
                <Typography
                  variant="body1"
                  sx={{
                    color: "#A3888C",
                    fontSize: "16px",
                    my: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                  {item.value}
                </Typography>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pl: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 300, fontSize: "26px" }}>
              Our Work
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
              {templateDesign.map((listOfImg, index) => {
                return (
                  <Box
                    sx={{
                      flex: "1 1 30%",
                      display: "flex",
                    }}
                    key={index}
                  >
                    <Link href={listOfImg.url}>
                      <img
                        className="imgHover"
                        src={listOfImg.img}
                        style={{
                          height: "80px",
                          width: "80px",
                          borderRadius: "7px",
                        }}
                      />
                    </Link>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
