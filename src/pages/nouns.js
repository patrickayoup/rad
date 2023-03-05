import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import NounInstruction from "../components/nounInstruction";
import NounDeclinationTable from "../components/nounDeclinationTable";

import { NOUNS, CASES, NOUN_HEADERS } from "../components/data";

export default class Nouns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      showSolution: false,
    };
  }
  submitPressed = () => {
    this.setState({ showSolution: true });
  };

  nextPressed = () => {
    const nNouns = Object.keys(NOUNS).length;
    const nextIndex = (this.state.currentIndex + 1) % nNouns;

    this.setState({
      showSolution: false,
      currentIndex: nextIndex,
    });
  };

  render() {
    const currentNoun = Object.keys(NOUNS)[this.state.currentIndex];
    const solution = NOUNS[currentNoun];

    return (
      <Container>
        <Row>
          <Col>
            <NounInstruction noun={currentNoun} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NounDeclinationTable
              noun={currentNoun}
              headers={NOUN_HEADERS}
              cases={CASES}
              solution={solution}
              showSolution={this.state.showSolution}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack gap="3">
              <Button onClick={this.submitPressed} tabIndex="10">
                Μετάβαση
              </Button>
              <Button onClick={this.nextPressed} tabIndex="10">
                Επόμενο
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    );
  }
}
