import React from "react";

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
      this.props.showSolution &&
      this.state.answer[idx].toLowerCase() ===
      this.props.solution[idx].toLowerCase()
    );
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
          {this.isCorrect(0) ? (
            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg></div>
          ) : <div>{this.props.solution[0]}</div>}
        </td>

        <td key={this.props.solution[1]}>
          <div>
            <input
              onChange={(e) => this.setAnswer(1, e)}
              tabIndex={this.props.rowNumber + 4}
              type="text"
            ></input>
          </div>
          {this.isCorrect(1) ? (
            <span>{this.props.solution[1]}</span>
          ) : null}
        </td>
      </tr>
    );
  }
}
