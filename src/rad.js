import React from "react";

import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Nouns from "./pages/nouns";
import Verbs from "./pages/verbs";

const Rad = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/rad" element={<Nouns />} />
          <Route path="/rad/nouns" element={<Nouns />} />
          <Route path="/rad/verbs" element={<Verbs />} />
        </Routes>
      </Container>
    </>
  );
};

export default Rad;
