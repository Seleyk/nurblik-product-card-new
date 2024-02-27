import { Button, TextField } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const NewFooter = () => {
  return (
    <div className="">
      <div
        className="bg-[#efefef] text-[#6a6a6a] flex max-md:flex-col flex-row justify-between max-md:gap-14 gap-20 mx-0 my-auto max-md:px-9 max-md:py-6 px-[75px] py-20  "
      >
        <div
          className="flex-1 flex flex-col"
        >
          <h2
            className="text-[#000000] font-medium text-3xl tracking-wide mb-5 uppercase"
          >
            Nurblik Kouture
          </h2>
          <p
          className="font-normal text-base mb-4 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <div
          className="flex gap-4">
            <div style={{ cursor: "pointer" }}>
              <FacebookIcon />
            </div>
            <div style={{ cursor: "pointer" }}>
              <InstagramIcon />
            </div>
            <div style={{ cursor: "pointer" }}>
              <TwitterIcon />
            </div>
            <div style={{ cursor: "pointer" }}>
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div
            style={{
              letterSpacing: ".2rem",
              textTransform: "uppercase",
              marginBottom: "20px",
              color: "#000000"
            }}
          >
            Help
          </div>
          <div>
            <div
              style={{
                listStyle: "none",
                lineHeight: 1.65,
                marginBottom: "8px",
              }}
            >
              <a
                className="underline"
                style={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                  color: "#6a6a6a",
                }}
                href="/"
              >
                Home
              </a>
            </div>
            <div
              style={{
                listStyle: "none",
                lineHeight: 1.65,
                marginBottom: "8px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                  color: "#6a6a6a",
                }}
                href="/products"
              >
                Men
              </a>
            </div>
            <div

              style={{
                listStyle: "none",
                lineHeight: 1.65,
                marginBottom: "8px",
              }}  
            >
              <a
                style={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                  color: "#6a6a6a",
                }}
                href="/products"
              >
                Women
              </a>
            </div>
            <div
              style={{
                listStyle: "none",
                lineHeight: 1.65,
                marginBottom: "8px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                  color: "#6a6a6a",
                }}
                href="/"
              >
                My Account{" "}
              </a>
            </div>
            <div
              style={{
                listStyle: "none",
                lineHeight: 1.65,
                marginBottom: "8px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                  color: "#6a6a6a",
                }}
                href="/cart"
              >
                Cart
              </a>
            </div>
            <div
              style={{
                listStyle: "none",
                lineHeight: 1.65,
                marginBottom: "8px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                  color: "#6a6a6a",
                }}
                href="/"
              >
                Track your order
              </a>
            </div>
            <div
              style={{
                listStyle: "none",
                lineHeight: 1.65,
                marginBottom: "8px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                  color: "#6a6a6a",
                }}
                href="/"
              >
                Wishlist
              </a>
            </div>
            <div
              style={{
                listStyle: "none",
                lineHeight: 1.65,
                marginBottom: "8px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                  color: "#6a6a6a",
                }}
                href="/"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              letterSpacing: ".2rem",
              textTransform: "uppercase",
              marginBottom: "20px",
              color: "#000000"
            }}
          >
            Contact Us
          </div>
          <p style={{ lineHeight: 1.65 }}>SELEY</p>
          <p style={{ lineHeight: 1.65 }}>123 First ave</p>
          <p style={{ lineHeight: 1.65 }}>New York, NY 10305</p>
          <p style={{ lineHeight: 1.65 }}>+1 (917) 456-7891</p>
          <p style={{ lineHeight: 1.65 }}>support@seley.com</p>
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              letterSpacing: ".2rem",
              textTransform: "uppercase",
              marginBottom: "20px",
              color: "#000000"
            }}
          >
            Newsletter
          </div>
          <div>
            Become a member to receive the latest updates and exclusive deals
          </div>
          <TextField
            label="Enter your email address"
            variant="outlined"
            size="small"
            margin="dense"
            color="info"
            sx={{ marginBottom: "14px" }}
          />
          <Button variant="contained" sx={{ letterSpacing: ".2rem" }}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
