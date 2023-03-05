import Table from 'react-bootstrap/Table';

import DeclinationRow from './declinationRow'
import DeclinationHeaderRow from './declinationHeaderRow'


export default function NounDeclinationTable(props) {
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