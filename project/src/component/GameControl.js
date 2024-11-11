import React from "react";

export default class GameControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: this.props.rows,
            cols: this.props.cols,
        };
        this.handleChangeRows = this.handleChangeRows.bind(this);
        this.handleChangeCols = this.handleChangeCols.bind(this);
    }

    handleChangeRows(e) {
        let v = e.target.value;
        if (v >= this.props.minRows && v <= this.props.maxRows) {
            this.setState({
                rows: e.target.value,
            });
        }
    }

    handleChangeCols(e) {
        let v = e.target.value;
        if (v >= this.props.minCols && v <= this.props.maxCols) {
            this.setState({
                cols: e.target.value,
            });
        }
    }

    render() {
        return (
            <div className="game-control">
                <div className="title">Game area size:</div>
                <label>rows</label>
                <input
                    type="number"
                    value={this.state.rows}
                    onChange={this.handleChangeRows}
                />
                <label>columns</label>
                <input
                    type="number"
                    value={this.state.cols}
                    onChange={this.handleChangeCols}
                />
                <input
                    type="button"
                    value="Play!"
                    onClick={() => this.props.handleNewGame(this.state.rows, this.state.cols)}
                />
                {/* Add Solve button directly below the Play button */}
                <input
                    type="button"
                    value="Solve"
                    onClick={this.props.solvePuzzle} // Calls the solvePuzzle function
                />
            </div>
        );
    }
}
