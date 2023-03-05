import React from 'react';


export default class DeclinationRow extends React.Component {

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