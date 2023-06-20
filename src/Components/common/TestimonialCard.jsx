import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function TestimonialCard({ data }) {

    return (
        <Box
            sx={{
                p: { lg: "30px 60px", xs: "20px 40px" },
                background: "#FFF",
                boxShadow: "-1px 6px 25px #f8dcee",
                borderRadius: "10px",
                m: { lg: "60px" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mb: 4,
                }}
            >
                <Avatar
                    src={data.image}
                    alt="avatar"
                    sx={{
                        width: { lg: "80px", xs: "60px" },
                        height: { lg: "80px", xs: "60px" },
                        mr: 4,
                    }}
                ></Avatar>
                <Box>
                    <Typography
                        sx={{ fontSize: "24px", color: "#101828", fontWeight: 600 }}
                    >
                        {data.name}
                    </Typography>
                    <Typography
                        sx={{ fontSize: "14px", color: "#00000060", fontWeight: 500 }}
                    >
                        {data.title}
                    </Typography>
                </Box>
            </Box>
            <Typography
                sx={{
                    color: "#00000060",
                    fontWeight: 600,
                    textAlign: "start",
                    ml: { lg: 4, xs: 2 },
                }}
            >
                {data.description}
            </Typography>
        </Box>
    );
}

export default TestimonialCard;
