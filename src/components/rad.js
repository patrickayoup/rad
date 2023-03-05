import React from "react";

import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import NavBar from "./navBar";
import DeclinationPage from "../pages/declinationPage";

import {
  INSTRUCTIONS,
  NOUNS,
  VERBS,
  NOUN_HEADERS,
  CASES,
  VERB_HEADERS,
  PERSONS,
} from "./data";

const Rad = () => {
  const nounsComponent = (
    <DeclinationPage
      instructionPhrase={INSTRUCTIONS.nouns}
      items={NOUNS}
      headers={NOUN_HEADERS}
      rowHeaders={CASES}
    />
  );
  const verbsComponent = (
    <DeclinationPage
      instructionPhrase={INSTRUCTIONS.verbs}
      items={VERBS}
      headers={VERB_HEADERS}
      rowHeaders={PERSONS}
    />
  );
  return (
    <>
      <Container>
        <NavBar />
        <Routes>
          <Route path="" element={nounsComponent} />
          <Route path="nouns" element={nounsComponent} />
          <Route path="verbs" element={verbsComponent} />
        </Routes>
      </Container>
    </>
  );
};

export default Rad;
