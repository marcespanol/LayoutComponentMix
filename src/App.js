import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";

import { StyledContainer } from "./styledComp.js";
import { StyledRow } from "./styledComp.js";
import { StyledCol } from "./styledComp.js";

import MyDropdown from "./comp/MyDropdown.js";
import MyCard from "./comp/MyCard";
import MyForm from "./comp/MyForm";
import MyCheckbox from "./comp/MyCheckbox";
import MyRange from "./comp/MyRange";
import MyBreadcrumb from "./comp/MyBreadcrumb.js";
import Spinner from "react-bootstrap/Spinner";

export default function App() {
  return (
    <div className="App">
      <h1>React & Bootstrap</h1>
      <h2>Layout Components Mix</h2>
      <StyledContainer>
        <StyledRow className="align-items-center">
          <StyledCol xs={6}>
            <StyledRow>
              <StyledCol
                xs={8}
                style={{
                  height: "100%",
                  backgroundColor: "#bde920",
                  paddingTop: "12%"
                }}
              >
                <MyBreadcrumb />
              </StyledCol>
              <StyledCol
                xs={4}
                style={{
                  height: "100%",
                  backgroundColor: "#a3deec",
                  paddingTop: "7%"
                }}
              >
                <MyCard />
              </StyledCol>
            </StyledRow>
            <StyledRow>
              <StyledCol
                xs={4}
                style={{ backgroundColor: "#c18561", paddingTop: "20%" }}
              >
                <Spinner animation="border" variant="primary" />
              </StyledCol>
              <StyledCol
                xs={8}
                style={{
                  backgroundColor: "#aa53aa",
                  paddingTop: "20%"
                }}
              >
                <MyDropdown />
              </StyledCol>
            </StyledRow>
          </StyledCol>
          <StyledCol
            xs={3}
            style={{
              height: "500px",
              backgroundColor: "#f2e7b9",
              borderTop: "2px solid black",
              borderBottom: "2px solid black",
              borderRight: "0px solid black",
              borderLeft: "0px solid black",
              paddingTop: "2%"
            }}
          >
            <MyForm />
          </StyledCol>
          <StyledCol>
            <StyledRow>
              <StyledCol
                style={{ backgroundColor: "#ffcf0b", paddingTop: "25%" }}
              >
                <MyRange />
              </StyledCol>
            </StyledRow>
            <StyledRow>
              <StyledCol
                style={{ backgroundColor: "#d0c6e9", paddingTop: "25%" }}
              >
                <MyCheckbox />
              </StyledCol>
            </StyledRow>
          </StyledCol>
        </StyledRow>
      </StyledContainer>
    </div>
  );
}
