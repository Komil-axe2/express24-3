import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F5F5F5",
        width: "100%",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          fontSize: "17px",
          gap: "30px",
          color: "#8e8e93",
          maxWidth: "1144px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <li>Biz haqimizda</li>
        <li>Aloqa uchun</li>
        <li>Foydalanuvchi shartnomasi</li>
      </ul>
      <p style={{ color: "#8e8e93", fontSize: "21px", maxWidth: "1144px", textAlign: "center" }}>
        Qollab Quvvatlash xizmati:+998 71 200 40 01
      </p>
    </Box>
  );
};

export default Footer;
