import React from "react";
import GameControl from "./GameControl";
import GameArea from "./GameArea";
import Message from "./Message";
import './App.css';
import {generateSequence, checkSequenceIsValid} from '../util/sequence';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 4,
            minRows: 3,
            maxRows: 12,
            cols: 4,
            minCols: 3,
            maxCols: 12,
            sequence: generateSequence(4, 4),
            winner: false,
        };
        this.handleNewGame = this.handleNewGame.bind(this);
        this.handleMove = this.handleMove.bind(this);
    }

    handleNewGame(rows, cols) {
        this.setState({
            rows: rows,
            cols: cols,
            sequence: generateSequence(rows, cols),
            winner: false,
        });
    }

    handleMove(number, ref) {
        if (this.state.winner) {
            return;
        }

        let numberInd = this.state.sequence.indexOf(number);
        let numberRow = Math.floor(numberInd / this.state.cols);
        let numberCol = numberInd % this.state.cols;

        let nullInd = this.state.sequence.indexOf(null);
        let nullRow = Math.floor(nullInd / this.state.cols);
        let nullCol = nullInd % this.state.cols;

        let diffRow = Math.abs(numberRow - nullRow);
        let diffCol = Math.abs(numberCol - nullCol);

        let move = null;
        if (diffRow === 1 && diffCol === 0) {
            move = numberRow > nullRow ? 'slideUp' : 'slideDown';
        } else if (diffRow === 0 && diffCol === 1) {
            move = numberCol > nullCol ? 'slideLeft' : 'slideRight';
        }

        if (move) {
            ref.current.classList.add(move);
            setTimeout(() => {
                let sequence = this.state.sequence.slice();
                sequence[nullInd] = number;
                sequence[numberInd] = null;
                this.setState({
                    sequence: sequence,
                    winner: checkSequenceIsValid(sequence),
                });
            }, 300);
        }
    }

    render() {
        return (
            <div className="app">
                <div className="header">"{this.state.sequence.length - 1}" puzzle</div>
                <GameControl
                    rows={this.state.rows}
                    minRows={this.state.minRows}
                    maxRows={this.state.maxRows}
                    cols={this.state.cols}
                    minCols={this.state.minCols}
                    maxCols={this.state.maxCols}
                    handleNewGame={this.handleNewGame}
                />
                <Message winner={this.state.winner}/>
                <GameArea
                    rows={this.state.rows}
                    cols={this.state.cols}
                    sequence={this.state.sequence}
                    handleMove={this.handleMove}
                />
            </div>
        );
    }
}
