import React from "react";

import Checkmark from './checkmark';

export default class DeclinationRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ["", ""],
    };
  }

  async setAnswer(idx, e) {
    let _answer = this.state.answer.slice();
    _answer[idx] = e.target.value;
    this.setState({ answer: _answer });
  }

  isCorrect(idx) {
    return (
      this.state.answer[idx].toLowerCase() ===
      this.props.solution[idx].toLowerCase()
    );
  }

  resultBadge(idx) {
    if (!this.props.showSolution) {
      return null;
    } else if (this.isCorrect(idx)) {
      return <Checkmark />;
    } else {
      return <div>{this.props.solution[idx]}</div>;
    }
  }

  render() {
    return (
      <tr>
        <th>{this.props.case}</th>
        <td key={this.props.solution[0]}>
          <div>
            <input
              onChange={(e) => this.setAnswer(0, e)}
              tabIndex={this.props.rowNumber}
              type="text"
            ></input>
          </div>
          {this.resultBadge(0)}
        </td>

        <td key={this.props.solution[1]}>
          <div>
            <input
              onChange={(e) => this.setAnswer(1, e)}
              tabIndex={this.props.rowNumber + 4}
              type="text"
            ></input>
          </div>
          {this.resultBadge(1)}
        </td>
      </tr>
    );
  }
}
