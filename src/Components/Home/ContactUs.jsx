import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";

function ContactUs() {
  const contactInfo = [
    {
      title: "Call Anytime",
      value: "shaadivines@gmail.com",
      icon: <HiMail style={{ marginRight: 4 }} size={24} />,
    },
    {
      title: "Write Email",
      value: "+888 (123) 869523",
      icon: <FaPhone style={{ marginRight: 4 }} size={24} />,
    },
    {
      title: "Visit Us Anytime",
      value: "New York – 1075 Firs Avenue",
      icon: <ImLocation style={{ marginRight: 4 }} size={24} />,
    },
  ];
  return (
    <section id="contact">
      <Box>
        <Typography
          variant="h2"
          className="vibeFont"
          sx={{ color: "#bc8129", mt: 10, textAlign: "center" }}
        >
          Contact Us
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Have Questions? Feel Free to Write Us
        </Typography>
        <Grid
          container
          sx={{ my: { lg: 10, xs: "40px" } }}
          className="layoutMargin"
        >
          <Grid
            item
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { lg: 0, xs: "20px" },
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "30px" }}>
              Have Questions? Feel Free to Write Us
            </Typography>
            <Typography variant="body1" sx={{ mr: 10, my: 2 }}>
              If you have any questions or inquiries, we are here to help! We
              value your feedback and are eager to assist you.
            </Typography>

            {contactInfo.map((contact, index) => {
              return (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", mt: 2 }}
                >
                  <Box
                    sx={{
                      background: "#BC8129",
                      p: 3,
                      mr: 4,
                      borderRadius: "7px",
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    {contact.icon}
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontSize: "16px" }}>
                      {contact.title}
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "20px" }}>
                      {contact.value}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                border: "1px solid #BC8129",
                p: 4,
                borderRadius: "7px",
                mt: { lg: 0, xs: "40px" },
                mx: { lg: 0, xs: "20px" },
              }}
            >
              <TextField
                placeholder="Your name"
                sx={{ background: "#FFF9F5", border: 0, width: "100%" }}
              />
              <TextField
                placeholder="Email address"
                sx={{ background: "#FFF9F5", border: 0, width: "100%", mt: 4 }}
              />
              <TextField
                placeholder="Write message"
                multiline
                rows={5}
                sx={{ background: "#FFF9F5", border: 0, width: "100%", mt: 4 }}
              />
              <Button
                sx={{
                  background: "#BC8129",
                  color: "#fff",
                  border: 0,
                  p: "7px 30px",
                  width: "100%",
                  mt: 4,
                  "&:hover": {
                    background: "#BC812990",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default ContactUs;
