import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactDOM from 'react-dom/client';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { NOUNS, CASES, NOUN_HEADERS } from './data'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class DeclinationRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: ['', '']
        };
    }

    async setAnswer(idx, e) {
        let _answer = this.state.answer.slice();
        _answer[idx] = e.target.value;
        this.setState({ answer: _answer });
    }

    shouldShowSolution(idx) {
        return this.props.showSolution
            && this.state.answer[idx].toLowerCase() !== this.props.solution[idx].toLowerCase();
    }

    render() {
        return (
            <tr>
                <th>{this.props.case}</th>
                <td key={this.props.solution[0]}>
                    <div>
                        <input onChange={(e) => this.setAnswer(0, e)}
                            tabIndex={this.props.rowNumber}
                            type="text">
                        </input>
                    </div>
                    {this.shouldShowSolution(0) ? <div>{this.props.solution[0]}</div> : null}
                </td>

                <td key={this.props.solution[1]}>
                    <div>
                        <input onChange={(e) => this.setAnswer(1, e)}
                            tabIndex={this.props.rowNumber + 4}
                            type="text">
                        </input>
                    </div>
                    {this.shouldShowSolution(1) ? <span>{this.props.solution[1]}</span> : null}
                </td>
            </tr>
        )
    }
}

function DeclinationHeaderRow(props) {
    return (
        <thead>
            <tr>{props.headers.map((h) => (<th key={h}>{h}</th>))}</tr>
        </thead>
    );
}

function NounInstruction(props) {
    return (<h1>Κλίνω το ουσιαστικό: {props.noun}</h1>);
}

function NounDeclinationTable(props) {
    return (
        <Table responsive striped bordered hover>
            <DeclinationHeaderRow headers={props.headers} />
            <tbody>
                {props.cases.map((c, idx) => (
                    <DeclinationRow key={c}
                        rowNumber={idx + 1}
                        case={c}
                        solution={props.solution[idx]}
                        showSolution={props.showSolution} />
                ))}
            </tbody>
        </Table>
    )
}

class Rad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            showSolution: false
        }
    }

    submitPressed = () => {
        this.setState({ showSolution: true })
    }

    nextPressed = () => {
        const nNouns = Object.keys(NOUNS).length;
        const nextIndex = (this.state.currentIndex + 1) % nNouns;

        this.setState({
            showSolution: false,
            currentIndex: nextIndex
        });
    }

    render() {
        const currentNoun = Object.keys(NOUNS)[this.state.currentIndex];
        const solution = NOUNS[currentNoun];

        return (
            <Container>
                <Row>
                    <Col><NounInstruction noun={currentNoun} /></Col>
                </Row>
                <Row>
                    <Col>
                        <NounDeclinationTable noun={currentNoun}
                            headers={NOUN_HEADERS}
                            cases={CASES}
                            solution={solution}
                            showSolution={this.state.showSolution} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Stack gap="3">
                            <Button onClick={this.submitPressed}
                                tabIndex="10">
                                Μετάβαση
                            </Button>
                            <Button onClick={this.nextPressed}
                                tabIndex="10">
                                Επόμενο
                            </Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Rad />);