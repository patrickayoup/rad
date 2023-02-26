import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { NOUNS } from './data'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class DeclinationRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: [null, null]
        };
    }

    async setAnswer(idx, e) {
        let _answer = this.state.answer.slice();
        _answer[idx] = e.target.value;
        await this.setState({ answer: _answer });
    }

    render() {
        return (
            <tr>
                <th>{this.props.case}</th>
                <td><input onChange={(e) => this.setAnswer(0, e)} tabIndex={this.props.rowNumber} type="text"></input>{this.props.showSolution && this.state.answer[0] !== this.props.solution[0] ? <span>{this.props.solution[0]}</span> : null}</td>
                <td><input onChange={(e) => this.setAnswer(1, e)} tabIndex={this.props.rowNumber + 4} type="text"></input>{this.props.showSolution && this.state.answer[1] !== this.props.solution[1] ? <span>{this.props.solution[1]}</span> : null}</td>
            </tr >
        )
    }
}

function DeclinationHeaderRow(props) {
    return (
        <thead>
            <tr>{props.headers.map((h) => (<th>{h}</th>))}</tr>
        </thead>
    );
}

function NounInstruction(props) {
    return (<h1>Κλίνω το ουσιαστικό: {props.noun}</h1>);
}

function NounDeclinationTable(props) {
    return (
        <Table striped bordered hover>
            <DeclinationHeaderRow headers={props.headers} />
            <tbody>
                {props.cases.map((c, idx) => (<DeclinationRow rowNumber={idx + 1} case={c} solution={props.solution[idx]} showSolution={props.showSolution} />))}
            </tbody>
        </Table>
    )
}

class Rad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cases: [
                'ονομαστική',
                'γενική',
                'αιτιατική',
                'κλητική'
            ],
            headers: [
                'πτώση',
                'ενικός',
                'πληθυντικός'
            ],
            nouns: [
                'αγώνας',
                'μαθητής',
                'δρόμος',
                'θάλασσα',
                'ψυχή'
            ],
            currentIndex: 0,
            showSolution: false
        }
    }

    render() {
        const currentNoun = this.state.nouns[this.state.currentIndex];
        return (
            < div >
                <NounInstruction noun={currentNoun} />
                <NounDeclinationTable noun={currentNoun} headers={this.state.headers} cases={this.state.cases} solution={NOUNS[currentNoun]} showSolution={this.state.showSolution} />
                <Stack gap="3">
                    <div><Button onClick={() => this.setState({ showSolution: true })} tabIndex="10">Μετάβαση</Button></div>
                    <div><Button onClick={() => this.setState({ currentIndex: (this.state.currentIndex + 1) % this.state.nouns.length })} tabIndex="10">Επόμενο</Button></div>
                </Stack>
            </div >
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Rad />);