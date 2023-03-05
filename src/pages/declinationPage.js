import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import DeclinationInstruction from "../components/declinationTable/declinationInstruction";
import DeclinationTable from "../components/declinationTable/declinationTable";

export default class DeclinationPage extends React.Component {
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
    const nItems = Object.keys(this.props.items).length;
    const nextIndex = (this.state.currentIndex + 1) % nItems;

    this.setState({
      showSolution: false,
      currentIndex: nextIndex,
    });
  };

  render() {
    const currentItem = Object.keys(this.props.items)[this.state.currentIndex];
    const solution = this.props.items[currentItem];

    return (
      <Container>
        <Row>
          <Col>
            <DeclinationInstruction
              instructionPhrase={this.props.instructionPhrase}
              item={currentItem}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <DeclinationTable
              headers={this.props.headers}
              cases={this.props.rowHeaders}
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
