/* eslint-disable no-unused-vars */
import React from "react";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <div style={{ backgroundColor: "#f05722", padding: "10px 0" }}>
      <div className="d-flex align-items-center">
        <h5
          className="navbar-brand mb-0"
          style={{ color: "white", marginLeft: "10px" }}
        >
          TravelMedia.in
        </h5>
      </div>
      <MDBContainer className="d-flex justify-content-center align-items-center">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: "50px",
            padding: "10px 20px",
            width: "fit-content",
          }}
        >
          {/* Navbar Icons */}
          <div className="d-flex gap-3">
            <MDBIcon
              fas
              icon="home"
              style={{ color: "#f05722", fontSize: "1.5rem" }}
            />
            <MDBIcon
              fas
              icon="bell"
              style={{ color: "#f5d1bf", fontSize: "1.5rem" }}
            />
            <MDBIcon
              fas
              icon="bookmark"
              style={{ color: "#f05722", fontSize: "1.5rem" }}
            />
            <MDBIcon
              fas
              icon="user"
              style={{ color: "#f5d1bf", fontSize: "1.5rem" }}
            />
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default CustomNavbar;
